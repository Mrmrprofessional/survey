survey.factory('SurveyFactory', function SurveyFactory() {
  var factory= {};
  factory.answers = [];
  
  factory.addAnswer = function(){
    var answer = {show: factory.show, crush: factory.crush };
    factory.answers.push(answer);
    console.log(factory.answers);
    factory.show = null;
    factory.crush = null;
  };

  return factory;
});
