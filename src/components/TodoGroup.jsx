import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TodoGroup = () => {
    const [todos,setTodos]=useState([[{id:1,title:"todo1",completed:false},{id:2,title:"todo2",completed:true}]])
    const [todoGroup,setTodoGroup]=useState({from:"",to:""})

    useEffect(() => {
        
    }, [])
    const handleAddTodos=()=>{
        if(todos.length<10)
        setTodos([...todos,[]])
    }

    return (
        <Box>
            {
                todos.map((todoGroup,index)=>(
                    <Flex key={index}>
                        <Flex alignItems={"center"} p={1} border={"1px solid black"} mr={"5px"}>
                            <Button>D</Button>
                            <p>{`Group ${index+1}`}</p>
                            <Flex>
                                <Input value={todoGroup.from} onChange={(e)=>setTodoGroup({...todoGroup,from:e.target.value})} border={"1px solid grey"} width={"50px"} type="number" />
                                <Button>{"->"}</Button>
                                <Input value={todoGroup.to} onChange={(e)=>setTodoGroup({...todoGroup,to:e.target.value})}  border={"1px solid grey"} width={"50px"} type="number"/>
                            </Flex>
                        </Flex>
                        <Flex  alignItems={"center"} border={"1px solid black"}>
                        {
                            todoGroup.map((todo,index)=>(
                                <Flex key={index} mr={"5px"} >
                                    <p>{`(${index})`}</p>
                                    <p>{todo.completed ? 'True' : 'False'}</p>
                                </Flex>
                            ))
                            }
                        </Flex>
                    </Flex>
                ))
            }
            <Button onClick={handleAddTodos}>Add group</Button>
        </Box>
    );
};

export default TodoGroup;
