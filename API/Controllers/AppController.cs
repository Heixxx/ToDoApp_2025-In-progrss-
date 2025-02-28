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

        [HttpGet("todos")]
        public async Task<ActionResult<IEnumerable<Tasks>>> GetTodos()
        {
            var todos = await _context.ToDos.ToListAsync();
            return Ok(todos);
        }

        [HttpDelete("todos/{taskId}")]
        public async Task<IActionResult> DeleteTodo(int taskId)
        {
            var task = await _context.ToDos.FirstOrDefaultAsync(t => t.task_Id == taskId);
            if (task == null)
            {
                return NotFound();
            }

            _context.ToDos.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("todos")]
        public async Task<ActionResult<Tasks>> AddTodo([FromBody] Tasks newTask)
        {
            if (newTask == null){
                return BadRequest();
            }
            _context.ToDos.Add(newTask);
            await _context.SaveChangesAsync();

            if (!ModelState.IsValid){
                return BadRequest(ModelState);
            }


            return CreatedAtAction(nameof(GetTodos), new { id = newTask.task_Id }, newTask);
        }


    }
}
