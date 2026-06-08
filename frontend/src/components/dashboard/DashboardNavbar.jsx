function DashboardNavbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div
      className="
      flex
      items-center
      justify-between
      mb-8
      "
    >
      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mt-1">
          Let's continue your career journey
        </p>
      </div>

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-xl
        px-4
        py-3
        "
      >
        <p className="font-medium">
          {user?.name}
        </p>

        <p className="text-sm text-gray-400">
          {user?.email}
        </p>
      </div>
    </div>
  );
}

export default DashboardNavbar;