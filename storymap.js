StorymapJS = (function($){

  function Storymap(id,params){

    var dataAdapter = function(){
      //process options to produce data

      var output = {};
      var slides = [];
      var overview = {};
      var storymap = params.storymap;

      overview.type="overview";
      overview.text={};
      overview.text.headline = storymap.overview_slide.textContent.headline;
      overview.text.text = storymap.overview_slide.textContent.body;
      overview.media={};
      overview.media.url= storymap.overview_slide.asset.media;
      overview.media.credit = storymap.overview_slide.asset.credit;
      overview.media.caption = storymap.overview_slide.asset.caption;

      slides.push(overview);



      for(var i=0;i<storymap.event_slides.length;i++){
        var data = storymap.event_slides[i];
        var event={};
        event.text={ "headline":data.textContent.headline, "text":data.textContent.body};
        event.media={ "url": data.asset.media , "credit": data.asset.credit, "caption": data.asset.caption};
        var loc= data.location;

        event.location={"lat": parseFloat(data.location.latitude) ,"lon": parseFloat(data.location.longitude),"zoom": 10};
        console.log(event.location);
        slides.push(event);
      }
      console.log(slides);
      console.log(slides.length);
      output.storymap = {};
      output.width=600;
      output.height=600;
      output.storymap.slides= slides;
      output.storymap.calculate_zoom = false;
      return output;

    }

    new VCO.StoryMap(id,dataAdapter(),{});

  }

  return Storymap;


})(H5P.jQuery);
