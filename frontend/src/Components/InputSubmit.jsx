export default function InputSubmit({ texto }) {
    return (
        <button 
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors" 
            type="submit"
        >
            {texto}
        </button>
    );
}