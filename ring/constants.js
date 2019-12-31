/**
 * Created to keep constants here.
 * @author Alessandro Pio Ardizio
 * @since 0.1
 */
'use strict'

const NODE_ADDED = 'NODE_ADDED'
const NODE_REMOVED = 'NODE_REMOVED'
const HEART_BEAT = 'HEART_BEAT'
const WELCOME = 'WELCOME'
const HOSTNAME = 'HOSTNAME'
const MESSAGE_SEPARATOR = '?'
const BECOME_LEADER = 'BECOME_LEADER'
const PARTITIONS_ASSIGNED = 'PARTITIONS_ASSIGNED'
const PARTITIONS_REVOKED = 'PARTITIONS_REVOKED'

module.exports = {
  NODE_ADDED: NODE_ADDED,
  NODE_REMOVED: NODE_REMOVED,
  WELCOME: WELCOME,
  HOSTNAME: HOSTNAME,
  MESSAGE_SEPARATOR: MESSAGE_SEPARATOR,
  HEART_BEAT: HEART_BEAT,
  BECOME_LEADER: BECOME_LEADER,
  PARTITIONS_ASSIGNED: PARTITIONS_ASSIGNED,
  PARTITIONS_REVOKED: PARTITIONS_REVOKED
}
