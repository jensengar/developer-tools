import Ember from 'ember';

export default Ember.Service.extend({
    dimensions:["", "conversationId", "sessionId", "mediaType", "queueId", "userId", "participantId", "participantName", "direction", "wrapUpCode", "wrapUpNote", "interactionType", "requestedRoutingSkillId", "requestedLanguageId", "purpose", "participantType", "segmentType", "disconnectType", "errorCode", "stationId", "edgeId", "dnis", "ani", "outboundCampaignId", "outboundContactId", "outboundContactListId", "monitoredParticipantId", "sourceSessionId", "destinationSessionId", "sourceConversationId", "destinationConversationId", "remoteNameDisplayable", "sipResponseCode", "q850ResponseCode", "conference", "groupId", "roomId", "addressFrom", "addressTo", "peerId", "scriptId", "evaluationId", "evaluatorId", "contextId", "formId", "formName", "eventTime", "callbackId", "callbackUserName", "callbackNumbers", "callbackScheduledTime", "conversationEnd", "skipEnabled", "timeoutSeconds"].sort(),
    propertyTypes:["", "bool", "integer", "real", "date", "string", "uuid"].sort(),
    metrics:[ "tSegmentDuration", "oTotalCriticalScore", "oTotalScore", "nEvaluations", "tAbandon", "tIvr", "tAnswered", "tAcd", "tTalk", "tHeld", "tTalkComplete", "tHeldComplete", "tAcw", "tHandle", "tWait", "tAgentRoutingStatus", "tOrganizationPresence", "tSystemPresence", "tUserResponseTime", "tAgentResponseTime", "nOffered", "nOverSla", "nTransferred", "nOutboundAttempted", "nOutboundConnected", "nOutboundAbandoned", "nError", "oServiceTarget", "oServiceLevel", "tActive", "tInactive", "oActiveUsers", "oMemberUsers", "oActiveQueues", "oMemberQueues", "oInteracting", "oWaiting", "oOnQueueUsers", "oOffQueueUsers"].sort(),
    operators:["matches", "exists", "notExists"],
    mediaTypes:["", "voice", "chat", "email", "callback", "screenshare", "cobrowse"].sort(),
    groupBy:["conversationId", "sessionId", "mediaType", "queueId", "userId", "participantId", "participantName", "direction", "wrapUpCode", "wrapUpNote", "interactionType", "requestedRoutingSkillId", "requestedLanguageId", "purpose", "participantType", "segmentType", "disconnectType", "errorCode", "stationId", "edgeId", "dnis", "ani", "outboundCampaignId", "outboundContactId", "outboundContactListId", "monitoredParticipantId", "sourceSessionId", "destinationSessionId", "sourceConversationId", "destinationConversationId", "remoteNameDisplayable", "sipResponseCode", "q850ResponseCode", "conference", "groupId", "roomId", "addressFrom", "addressTo", "peerId", "scriptId", "evaluationId", "evaluatorId", "contextId", "formId", "formName", "eventTime", "callbackId", "callbackUserName", "callbackNumbers", "callbackScheduledTime", "conversationEnd", "skipEnabled", "timeoutSeconds"].sort(),
    aggregationTypes:['termFrequency', 'numericRange'],
    filteredMetrics: function(filter){
        var patt = new RegExp(filter);

        return this.get('metrics').filter(function(item){
            return patt.test(item);
          });
    }
});
