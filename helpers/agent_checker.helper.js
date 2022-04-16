// ======= Check if the user agent is mobile -->

export const AgentChecker = (userAgent) => {
  const MobileAgents = ['Mobile', 'Phone', 'Android'];
  return MobileAgents.some((agent) => userAgent.includes(agent));
};
