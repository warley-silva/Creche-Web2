import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditUser = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("Male");
    
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nome,
        idade,
        telefone,
        email,
        senha,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNome(response.data.nome);
    setIdade(response.data.idade);
    setTelefone(response.data.telefone);
    setEmail(response.data.email);
    setSenha(response.data.senha);
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nome</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Idade</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="Idade"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Telefone</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Senha</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
              />
            </div>
          </div>
          
          <div className="field">
            <button type="submit" className="button is-success">
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditUser;