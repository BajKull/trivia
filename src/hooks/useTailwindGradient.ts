export type GradientVariant = "indigo" | "green" | "red" | "orange" | "purple";

interface useTailwindGradientProps {
  variant: GradientVariant;
}

// due to how tailwind JIT compiler works, these classes have to be static.

const useTailwindGradient = ({ variant }: useTailwindGradientProps) => {
  const getVariant = () => {
    switch (variant) {
      case "indigo":
        return {
          900: "from-pink-900 via-purple-800 to-indigo-700 shadow-indigo-600/50",
          800: "from-pink-800 via-purple-700 to-indigo-600 shadow-indigo-500/50",
          700: "from-pink-700 via-purple-700 to-indigo-600 shadow-indigo-500/50",
          600: "from-pink-600 via-purple-600 to-indigo-500 shadow-indigo-400/50",
          500: "from-pink-500 via-purple-600 to-indigo-500 shadow-indigo-400/50",
        };
      case "green":
        return {
          900: "from-purple-900 via-sky-700 to-green-700 shadow-green-600/50",
          800: "from-purple-800 via-sky-600 to-green-600 shadow-green-500/50",
          700: "from-purple-700 via-sky-600 to-green-600 shadow-green-500/50",
          600: "from-purple-600 via-sky-500 to-green-500 shadow-green-400/50",
          500: "from-purple-500 via-sky-400 to-green-500 shadow-green-400/50",
        };
      case "red":
        return {
          900: "from-teal-700 via-purple-600 to-red-600 shadow-red-600/50",
          800: "from-teal-600 via-purple-500 to-red-500 shadow-red-500/50",
          700: "from-teal-600 via-purple-500 to-red-500 shadow-red-500/50",
          600: "from-teal-500 via-purple-400 to-red-400 shadow-red-400/50",
          500: "from-teal-500 via-purple-400 to-red-400 shadow-red-400/50",
        };
      case "orange":
        return {
          900: "from-pink-900 via-rose-700 to-orange-700 shadow-orange-600/50",
          800: "from-pink-800 via-rose-600 to-orange-600 shadow-orange-500/50",
          700: "from-pink-700 via-rose-500 to-orange-600 shadow-orange-500/50",
          600: "from-pink-600 via-rose-500 to-orange-500 shadow-orange-400/50",
          500: "from-pink-500 via-rose-400 to-orange-500 shadow-orange-400/50",
        };
      case "purple":
        return {
          900: "from-cyan-900 via-indigo-700 to-purple-800 shadow-purple-600/50",
          800: "from-cyan-800 via-indigo-600 to-purple-700 shadow-purple-500/50",
          700: "from-cyan-700 via-indigo-500 to-purple-600 shadow-purple-500/50",
          600: "from-cyan-600 via-indigo-400 to-purple-500 shadow-purple-400/50",
          500: "from-cyan-500 via-indigo-400 to-purple-400 shadow-purple-400/50",
        };
      default:
        return {
          900: "from-purple-900 to-blue-800 shadow-blue-600/50",
          800: "from-purple-800 to-blue-700 shadow-blue-500/50",
          700: "from-purple-700 to-blue-600 shadow-blue-500/50",
          600: "from-purple-600 to-blue-500 shadow-blue-400/50",
          500: "from-purple-500 to-blue-400 shadow-blue-400/50",
        };
    }
  };

  return getVariant();
};

export default useTailwindGradient;
