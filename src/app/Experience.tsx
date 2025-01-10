
export default function Experience() {
  return(
    
    <div id="experience" className="pt-32 pb-32 flex flex-col items-center justify-center w-full bg-sky-700 text-mint-cream ">
      <h1 className="font-bold text-7xl drop-shadow-sm">EXPERIENCE</h1>
        <p className="pt-32 text-4xl drop-shadow-lg font-bold">Bloomberg LP</p>
        <p className="text-2xl drop-shadow-lg">June 2024 - August 2024</p>
        <p className="pt-6 text-xl drop-shadow-lg w-3/4 md:w-1/2">
          I worked on Bloomberg's internal ticketing system. I performed a feature
          migration of the ticketing system's mobile app from a deprecated framework to a
          newly developed service-driven internal framework. This migration allowed
          my team to deprecate an old code monolith as well as remove old code
          from a shared company-wide repository. I also ensured that future changes
          to the app would be streamlined and easy to navigate.
        </p>

    </div>
  )
}
