export type GradientVariant = "indigo" | "blue" | "lime" | "purple" | "pink";

interface useTailwindGradientProps {
  variant: GradientVariant;
}

// due to how tailwind JIT compiler works, these classes have to be static.

const useTailwindGradient = ({ variant }: useTailwindGradientProps) => {
  const getVariant = () => {
    switch (variant) {
      case "blue":
        return {
          900: "from-cyan-900 to-blue-700 shadow-blue-600/50",
          800: "from-cyan-800 to-blue-600 shadow-blue-500/50",
          700: "from-cyan-700 to-blue-600 shadow-blue-500/50",
          600: "from-cyan-600 to-blue-500 shadow-blue-400/50",
          500: "from-cyan-500 to-blue-500 shadow-blue-400/50",
        };
      case "indigo":
        return {
          900: "from-indigo-900 to-rose-700 shadow-rose-600/50",
          800: "from-indigo-800 to-rose-600 shadow-rose-500/50",
          700: "from-indigo-700 to-rose-600 shadow-rose-500/50",
          600: "from-indigo-600 to-rose-500 shadow-rose-400/50",
          500: "from-indigo-500 to-rose-500 shadow-rose-400/50",
        };
      case "lime":
        return {
          900: "from-lime-900 to-teal-700 shadow-teal-600/50",
          800: "from-lime-800 to-teal-600 shadow-teal-500/50",
          700: "from-lime-700 to-teal-600 shadow-teal-500/50",
          600: "from-lime-600 to-teal-500 shadow-teal-400/50",
          500: "from-lime-500 to-teal-500 shadow-teal-400/50",
        };
      case "pink":
        return {
          900: "from-pink-900 to-orange-700 shadow-orange-600/50",
          800: "from-pink-800 to-orange-600 shadow-orange-500/50",
          700: "from-pink-700 to-orange-600 shadow-orange-500/50",
          600: "from-pink-600 to-orange-500 shadow-orange-400/50",
          500: "from-pink-500 to-orange-500 shadow-orange-400/50",
        };
      case "purple":
        return {
          900: "from-fuchsia-900 to-purple-800 shadow-purple-600/50",
          800: "from-fuchsia-800 to-purple-700 shadow-purple-500/50",
          700: "from-fuchsia-700 to-purple-600 shadow-purple-500/50",
          600: "from-fuchsia-600 to-purple-500 shadow-purple-400/50",
          500: "from-fuchsia-500 to-purple-400 shadow-purple-400/50",
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
