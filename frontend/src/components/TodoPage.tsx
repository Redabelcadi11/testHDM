import { Check, Delete } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../hooks/useFetch';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
}

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editedTask, setEditedTask] = useState<{ id: number; title: string } | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    handleFetchTasks();
  };

  const handleSave = async () => {
    if (editedTask?.id) {
      await updateTask(editedTask.id, { title, description });
    } else {
      await createTask({ title, description });
    }
    setTitle('');
    setDescription('');
    setEditedTask(null);
    handleFetchTasks();
  };

  const handleEditTask = (id: number, name: string) => {
    setEditedTask({ id, title: name });
    setTitle(name);
  };

  useEffect(() => {
    handleFetchTasks();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>
      <Box justifyContent="center" mt={5} flexDirection="column">
        {tasks.map((task) => (
          <Box key={task.id} display="flex" justifyContent="center" alignItems="center" mt={2} gap={1} width="100%">
            <TextField
              size="small"
              value={editedTask?.id === task.id ? title : task.title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              sx={{ maxWidth: 350 }}
            />
            <Box>
              <IconButton
                color="success"
                disabled={!editedTask || editedTask.id !== task.id || title === task.title}
                onClick={handleSave}
              >
                <Check />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(task.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={1}>
          <TextField
            size="small"
            placeholder="Nouvelle tâche"
            value={editedTask?.id ? '' : title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={{ maxWidth: 350 }}
          />
          <Button variant="outlined" onClick={handleSave} disabled={!title}>
            Ajouter une tâche
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TodoPage;
