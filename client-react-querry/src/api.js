export const getAllbooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
  if(!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

export const removeBook = async(id) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`,{
    method: 'DELETE',
  });

  if(!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
}

export const getBook = async({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
  });

  if(!response.ok) {
    throw new Error(response.json().message);
  }


  return response.json();
}

export const updateBook = async({ id, ...data }) => {
  const response =  await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if(!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
}

export const createBook = async(data) => {
  const response =  await fetch(`${process.env.REACT_APP_API_SERVER}/books`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if(!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
}