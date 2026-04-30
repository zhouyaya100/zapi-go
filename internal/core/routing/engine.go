package routing

import "strings"

type RoutingEngine struct{ Pool *ChannelPool }

var Engine = &RoutingEngine{Pool: Pool}

func (e *RoutingEngine) ResolveModel(ch *ChannelInfo, model string) string {
	if ch.ModelMapping != nil { if mapped, ok := ch.ModelMapping[model]; ok { return mapped } }
	return model
}

func (e *RoutingEngine) BuildUpstreamURL(baseURL, requestPath string) string {
	base := strings.TrimRight(baseURL, "/")
	if strings.HasSuffix(base, "/v1") { return base[:len(base)-3] + requestPath }
	return base + requestPath
}
