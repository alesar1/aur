# aur-sync_gateway-community-bin

An unofficial [AUR package](https://aur.archlinux.org/packages/sync_gateway-community-bin/) for Couchbase [Sync Gateway](https://github.com/couchbase/sync_gateway) Community Edition (CE).

## Getting Started

This package adheres to the Filesystem Hierarchy Standard, instead of the typical Couchbase Sync Gateway installation directories, so some things to note:

### Binary Location

The binary can be run standalone, and is located at `/usr/bin/sync_gateway`.

### Systemd Service

Start/Enable the systemd service, located at `/usr/lib/systemd/system/`:

```
# systemctl start sync_gateway
# systemctl enable sync_gateway
```

### Config File

The configuration file is at `/etc/sync_gateway.json`.

You must restart Sync Gateway for any configuration changes to take effect.

### Log Files

Log files are written to `/var/log/sync_gateway`, in addition to journalctl.

### License

Sync Gateway Community Edition is licensed under the [Couchbase Community Edition License](https://www.couchbase.com/community-license-agreement).
