using API.Context;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppController : ControllerBase
    {
        private readonly ToDoContext _context;

        public AppController(ToDoContext context)
        {
            _context = context;
        }

        // GET: api/app/todos
        [HttpGet("todos")]
        public async Task<ActionResult<IEnumerable<Tasks>>> GetTodos()
        {
            var todos = await _context.ToDos.ToListAsync();
            return Ok(todos);
        }

        // POST: api/app/todos
        [HttpPost("todos")]
        public async Task<ActionResult<Tasks>> AddTodo([FromBody] Tasks newTask)
        {
            // Dodaj nowe zadanie do kontekstu
            _context.ToDos.Add(newTask);
            await _context.SaveChangesAsync();

            // Zwracamy status 201 Created
            return CreatedAtAction(nameof(GetTodos), new { id = newTask.taskId }, newTask);
        }
    }
}
