# Maintainer: Nathan <ndowens@artixlinux.org>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Jan de Groot <jgc@archlinxu.org>
# Contributor: Wael Nasreddine <gandalf@siemens-mobiles.org>
# Contributor: Tor Krill <tor@krill.nu>
# Contributor: Will Rea <sillywilly@gmail.com>
# Contributor: Valentine Sinitsyn <e_val@inbox.ru>

pkgbase=networkmanager-iwd
pkgname=(networkmanager-iwd libnm-iwd nm-iwd-cloud-setup)
pkgver=1.26.2
pkgrel=2
pkgdesc="NM modified package to use exclusively iwd backend getting rid of wpa_supplicant dependency"
url="https://wiki.gnome.org/Projects/NetworkManager"
arch=(x86_64)
license=(GPL2 LGPL2.1)
_pppver=2.4.7
makedepends=(intltool dhclient iptables gobject-introspection gtk-doc "ppp=$_pppver" modemmanager
             iproute2 nss polkit wpa_supplicant curl systemd libmm-glib
             libnewt libndp libteam vala perl-yaml python-gobject git vala jansson bluez-libs
             glib2-docs iwd dnsmasq openresolv libpsl audit meson)
checkdepends=(libx11 python-dbus)
_commit=c3c6c426dfca621fa71dceacbba2789b9f8ce144  # tags/1.26.2^0
source=("git+https://gitlab.freedesktop.org/NetworkManager/NetworkManager.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd NetworkManager
  git describe | sed 's/-dev/dev/;s/-rc/rc/;s/-/+/g'
}

prepare() {
  cd NetworkManager
  # Fix doc build
  git cherry-pick -n 54e25f23f53af889703dfc50d51a8afeeea8a439
}

build() {
  local meson_args=(
    # system paths
    -D dbus_conf_dir=/usr/share/dbus-1/system.d

    # platform
    -D dist_version="$pkgver-$pkgrel"
    -D session_tracking_consolekit=false

    -D polkit_agent=true
    -D selinux=false

    # features
    -D iwd=true
    -D pppd_plugin_dir=/usr/lib/pppd/$_pppver
    -D teamdctl=true
    -D nm_cloud_setup=true
    -D bluez5_dun=true
    -D ebpf=true

    # configuration plugins
    -D config_plugins_default=keyfile

    # dhcp clients
    -D dhcpcd=no

    # miscellaneous
    -D vapi=true
    -D docs=true
    -D more_asserts=no
    -D more_logging=false
    -D qt=false
  )

  arch-meson NetworkManager build "${meson_args[@]}"
  ninja -C build
}


check() {
  # iproute2 bug 
  # https://gitlab.freedesktop.org/NetworkManager/NetworkManager/commit/be76d8b624fab99cbd76092ff511e6adc305279c
  meson test -C build --print-errorlogs || :
}

_pick() {
  local p="$1" f d; shift
  for f; do
    d="$srcdir/$p/${f#$pkgdir/}"
    mkdir -p "$(dirname "$d")"
    mv "$f" "$d"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
  done
}

package_networkmanager-iwd() {
  depends=(libnm-iwd iproute2 polkit iwd libmm-glib libnewt libndp libteam curl
           bluez-libs libpsl audit mobile-broadband-provider-info)
  provides=("networkmanager")
  conflicts=("networkmanager")
  optdepends=('dnsmasq: connection sharing'
              'bluez: Bluetooth support'
              'ppp: dialup connection support'
              'modemmanager: cellular network support'
              'dhclient: alternative DHCP client'
              'openresolv: alternative resolv.conf manager')              
  backup=(etc/NetworkManager/NetworkManager.conf)
  groups=(gnome)
  install="$pkgbase.install"

  DESTDIR="$pkgdir" meson install -C build

  # /etc/NetworkManager
  install -d "$pkgdir"/etc/NetworkManager/{conf,dnsmasq}.d
  install -dm700 "$pkgdir/etc/NetworkManager/system-connections"
  install -m644 /dev/stdin "$pkgdir/etc/NetworkManager/NetworkManager.conf" <<END
# Configuration file for NetworkManager.
# See "man 5 NetworkManager.conf" for details.
END

  # packaged configuration
  install -Dm644 /dev/stdin "$pkgdir/usr/lib/NetworkManager/conf.d/20-connectivity.conf" <<END
[connectivity]
uri=http://www.archlinux.org/check_network_status.txt
END

  # iwd wifi backend
  install -Dm644 /dev/stdin "$pkgdir/usr/lib/NetworkManager/conf.d/30-wifi-backend.conf" <<END
[device]
wifi.backend=iwd
END

  # iwd.service overriding configuration
  install -Dm644 /dev/stdin "$pkgdir/etc/systemd/system/iwd.service.d/90-networkmanager.conf" <<END
[Unit]
After=systemd-udevd.service
Before=NetworkManager.service
END

  shopt -s globstar

  ### Split libnm
  _pick libnm "$pkgdir"/usr/include/libnm
  _pick libnm "$pkgdir"/usr/lib/girepository-1.0/NM-*
  _pick libnm "$pkgdir"/usr/lib/libnm.*
  _pick libnm "$pkgdir"/usr/lib/pkgconfig/libnm.pc
  _pick libnm "$pkgdir"/usr/share/gir-1.0/NM-*
  _pick libnm "$pkgdir"/usr/share/gtk-doc/html/libnm
  _pick libnm "$pkgdir"/usr/share/vala/vapi/libnm.*

  ### Split nm-cloud-setup
  _pick nm-cloud-setup "$pkgdir"/usr/lib/**/*nm-cloud-setup*

  # Restore empty dir
  mkdir "$pkgdir/usr/lib/NetworkManager/dispatcher.d/no-wait.d"
}

package_libnm-iwd() {
  pkgdesc="NetworkManager client library with iwd backend"
  depends=(glib2 nss libutil-linux jansson systemd-libs)
  provides=("libnm")
  conflicts=("libnm")
  mv libnm/* "$pkgdir"
}

package_nm-iwd-cloud-setup() {
  pkgdesc="Automatically configure NetworkManager in cloud"
  depends=(networkmanager-iwd)
  provides=("nm-cloud-setup")
  conflicts=("nm-cloud-setup")
  mv nm-cloud-setup/* "$pkgdir"
}
