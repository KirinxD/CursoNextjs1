import WidgetGrid from "@/components/shared/simpleWidget/widgetGrid";

export default function MainPage(){
  return (
      <div className="">
        <h1>Pagina principal</h1>
        <span></span>
        <div className="flex flex-wrap items-center justify-center space-x-3 space-y-3">
          <WidgetGrid/>
        </div>
      </div>
  )
}