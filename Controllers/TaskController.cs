using API.Context;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController:ControllerBase{
        private readonly ToDoContext _context;
        public TasksController(ToDoContext context){
            _context = context;
        }
        [HttpGet]

        [HttpGet("tasks")]
        public async Task<ActionResult<IEnumerable<Tasks>>> GetTasks(){

            var task = await _context.ToDos.ToListAsync();
            return Ok(task);
        }

        [HttpGet("task/{taskId}")]
        public async Task<ActionResult<Tasks>> getTask(int taskId){

            var task = await _context.ToDos.FirstOrDefaultAsync(t => t.task_Id == taskId);

            return Ok(task);
        }

        [HttpDelete("task/{taskId}")]
        public async Task<ActionResult<Task>> delTask(int taskId){

            var task = await _context.ToDos.FirstOrDefaultAsync(t => t.task_Id == taskId);

            if(task == null){
                return NoContent();
            }

            _context.ToDos.Remove(task);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPost("task")]
        public async Task<ActionResult<Task>> AddTask([FromBody] Tasks newTask){

            if (newTask == null){
                return BadRequest();
            }

            _context.ToDos.Add(newTask);
            await _context.SaveChangesAsync();

            if (!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            return CreatedAtAction(nameof(AddTask), new {id = newTask.task_Id}, newTask);
        }
    }
}