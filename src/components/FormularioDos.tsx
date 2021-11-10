import { useForm } from "../hooks/useForm";

interface formData {
  postal: string;
  ciudad: string;
}

export const FormularioDos = () => {
  const { formulario, cambioFormulario } = useForm<formData>({
    postal: "",
    ciudad: "",
  });
  const { ciudad, postal } = formulario;
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Codigo postal:</label>
        <input
          type="text"
          className="form-control"
          name="postal"
          value={postal}
          onChange={cambioFormulario}
        />
        <label className="form-label">Ciudad:</label>
        <input
          type="text"
          className="form-control"
          name="ciudad"
          value={ciudad}
          onChange={cambioFormulario}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
