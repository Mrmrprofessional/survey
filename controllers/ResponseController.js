survey.controller('ResponseCtrl', function ResponseCtrl($scope, SurveyFactory) {
  $scope.answers = SurveyFactory.answers;
  
  $scope.SurveyFactory = SurveyFactory;
});
