/**
 * We create a different file to load the remote module, to do
 * that the webpack the opportunity to fetch code from the remotes
 * before the index file
 */
import("./bootstrap.js")