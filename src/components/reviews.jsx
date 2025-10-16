// components/Reviews.jsx - VERSIÓN COMPLETA CON LOCALSTORAGE
import React, { useState, useEffect } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 5,
  });
  const [submitStatus, setSubmitStatus] = useState("");

  // Cargar reseñas al iniciar
  useEffect(() => {
    const savedReviews = localStorage.getItem("portfolioReviews");
    if (savedReviews) {
      try {
        const parsedReviews = JSON.parse(savedReviews);
        // Ordenar por fecha más reciente primero
        const sortedReviews = parsedReviews.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setReviews(sortedReviews);
      } catch (error) {
        console.error("Error loading reviews:", error);
        // Si hay error, empezar con array vacío
        setReviews([]);
      }
    }
  }, []);

  // Guardar cuando cambien las reseñas
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("portfolioReviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newReview.name.trim()) {
      setSubmitStatus("Por favor ingresa tu nombre");
      return;
    }

    if (!newReview.comment.trim()) {
      setSubmitStatus("Por favor escribe un comentario");
      return;
    }

    if (newReview.comment.length < 10) {
      setSubmitStatus("El comentario debe tener al menos 10 caracteres");
      return;
    }

    const review = {
      id: Date.now(),
      name: newReview.name.trim(),
      comment: newReview.comment.trim(),
      rating: newReview.rating,
      date: new Date().toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      avatar: "👤",
      timestamp: new Date().toISOString(),
    };

    setReviews((prevReviews) => [review, ...prevReviews]);
    setNewReview({ name: "", comment: "", rating: 5 });
    setSubmitStatus("¡Gracias por tu reseña! 🎉");

    // Limpiar mensaje después de 3 segundos
    setTimeout(() => setSubmitStatus(""), 3000);
  };

  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  // Calcular estadísticas
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (
    <section
      id="reviews"
      className="max-w-6xl mx-auto my-20 px-4 sm:px-6 py-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-3 h-12 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Reseñas y Comentarios
          </h2>
          <div className="w-3 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
        </div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Lo que dicen los visitantes sobre mi portafolio
        </p>
      </div>

      {/* Estadísticas */}
      {reviews.length > 0 && (
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-3xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {averageRating}
              </div>
              <div className="text-gray-400 text-sm">Calificación</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {reviews.length}
              </div>
              <div className="text-gray-400 text-sm">Reseñas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">
                {reviews.filter((r) => r.rating >= 4).length}
              </div>
              <div className="text-gray-400 text-sm">Positivas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {reviews.filter((r) => r.rating <= 2).length}
              </div>
              <div className="text-gray-400 text-sm">Por mejorar</div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-400">💫</span>
            Deja tu Reseña
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Tu Nombre *
              </label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                className="w-full bg-gray-700/50 border border-gray-600/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="¿Cómo te llamas?"
                required
                maxLength={50}
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Calificación *
              </label>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="text-2xl transition-transform duration-300 hover:scale-110"
                  >
                    {star <= newReview.rating ? "⭐" : "☆"}
                  </button>
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                {newReview.rating} de 5 estrellas
              </span>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Tu Comentario * (mín. 10 caracteres)
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                rows="4"
                className="w-full bg-gray-700/50 border border-gray-600/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                placeholder="¿Qué opinas de mi portafolio? ¿Qué te gustó? ¿Qué podría mejorar?"
                required
                minLength={10}
                maxLength={500}
              />
              <div className="text-right text-gray-400 text-sm mt-1">
                {newReview.comment.length}/500 caracteres
              </div>
            </div>

            {submitStatus && (
              <div
                className={`p-3 rounded-lg text-center ${
                  submitStatus.includes("¡Gracias")
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}
              >
                {submitStatus}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                !newReview.name.trim() ||
                !newReview.comment.trim() ||
                newReview.comment.length < 10
              }
            >
              Enviar Reseña
            </button>
          </form>
        </div>

        {/* Lista de Reseñas */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-blue-400">💬</span>
              Reseñas Recientes
            </h3>
            <span className="text-gray-400 text-sm">
              {reviews.length} {reviews.length === 1 ? "reseña" : "reseñas"}
            </span>
          </div>

          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{review.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-white font-semibold text-lg truncate">
                        {review.name}
                      </h4>
                      <span className="text-gray-400 text-sm flex-shrink-0">
                        {review.date}
                      </span>
                    </div>
                    <div className="text-yellow-400 text-lg mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-300 leading-relaxed break-words">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-600/30 rounded-2xl">
              <div className="text-6xl mb-4">💬</div>
              <p className="text-lg mb-2">No hay reseñas aún</p>
              <p className="text-sm">¡Sé el primero en dejar tu comentario!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
