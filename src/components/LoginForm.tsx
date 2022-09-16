import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const submit = () => {
        login(username, password)
    }
    return (
        <Form onFinish={submit}>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label="Імя користувача"
                name="username"
                rules={[rules.required('Введіть імя користувача')]}
            >
                <Input placeholder='user / admin / artur' value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введіть пароль')]}
            >
                <Input type='password' placeholder='123' value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Ввійти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;