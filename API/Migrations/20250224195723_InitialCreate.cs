using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ToDos",
                columns: table => new
                {
                    task_Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    user_Id = table.Column<int>(type: "INTEGER", nullable: true),
                    title = table.Column<string>(type: "TEXT", nullable: false),
                    start_Date = table.Column<string>(type: "TEXT", nullable: true),
                    end_Date = table.Column<string>(type: "TEXT", nullable: true),
                    start_Time = table.Column<string>(type: "TEXT", nullable: true),
                    end_Time = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ToDos", x => x.task_Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    user_Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.user_Id);
                });

            migrationBuilder.InsertData(
                table: "ToDos",
                columns: new[] { "task_Id", "end_Date", "end_Time", "start_Date", "start_Time", "title", "user_Id" },
                values: new object[,]
                {
                    { 1, null, null, null, null, "test1", null },
                    { 2, null, null, null, null, "test2", null },
                    { 3, null, null, null, null, "test3", null },
                    { 4, null, null, null, null, "test4", null },
                    { 5, null, null, null, null, "test5", null }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "user_Id", "name" },
                values: new object[,]
                {
                    { 1, "admin" },
                    { 2, "user" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ToDos");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
