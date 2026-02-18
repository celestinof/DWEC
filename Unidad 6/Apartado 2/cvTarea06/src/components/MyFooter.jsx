function MyFooter() {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <div className="container">
        {/* Comentario JSX: Información de copyright */}
        <p className="text-muted">
          &copy; {new Date().getFullYear()} - Web CV creada con React
        </p>
      </div>
    </footer>
  );
}

export default MyFooter;