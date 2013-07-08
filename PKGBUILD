# $Id: PKGBUILD 187894 2013-06-07 21:35:29Z heftig $
# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Jan de Groot <jgc@archlinxu.org>
# Contributor: Wael Nasreddine <gandalf@siemens-mobiles.org>
# Contributor: Tor Krill <tor@krill.nu>
# Contributor: Will Rea <sillywilly@gmail.com>
# Contributor: Valentine Sinitsyn <e_val@inbox.ru>

pkgname=networkmanager-ifupdown
_oldname=networkmanager
_pkgname=NetworkManager
pkgver=0.9.8.2
pkgrel=1
pkgdesc="Network Management daemon"
arch=('i686' 'x86_64')
license=('GPL')
url="http://www.gnome.org/projects/$_pkgname/"
conflicts=($_oldname)
provides=($_oldname=$pkgver)
depends=(dbus-glib iproute2 libnl nss polkit udev wpa_supplicant dhcp-client
         libsoup systemd modemmanager)
makedepends=(intltool dhcpcd dhclient iptables gobject-introspection gtk-doc git)
optdepends=('dhclient: DHCPv6 support'
            'dnsmasq: Connection sharing'
            'bluez4: Bluetooth support'
            'openresolv: resolvconf support'
            'ppp: Dialup connection support')
options=('!libtool')
backup=('etc/NetworkManager/NetworkManager.conf')
install=networkmanager.install
#source=(git://anongit.freedesktop.org/NetworkManager/NetworkManager#commit=93c1041
source=(http://ftp.gnome.org/pub/gnome/sources/$_pkgname/${pkgver:0:3}/$_pkgname-$pkgver.tar.xz
        NetworkManager.conf disable_set_hostname.patch)
sha256sums=('5c0b2f71b2f61e0dfbe95cebad83001758db252d5cdf5b6f7ceebac9c6bd7ead'
            '44b048804c7c0b8b3b0c29b8632b6ad613c397d0a1635ec918e10c0fbcdadf21'
            '25056837ea92e559f09563ed817e3e0cd9333be861b8914e45f62ceaae2e0460')

prepare() {
  cd $_pkgname-$pkgver
  patch -Np1 -i ../disable_set_hostname.patch
}

build() {
  cd $_pkgname-$pkgver
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --libexecdir=/usr/lib/networkmanager \
    --sbindir=/usr/bin \
    --with-crypto=nss \
    --with-dhclient=/usr/bin/dhclient \
    --with-dhcpcd=/usr/bin/dhcpcd \
    --with-iptables=/usr/bin/iptables \
    --with-systemdsystemunitdir=/usr/lib/systemd/system \
    --with-udev-dir=/usr/lib/udev \
    --with-resolvconf=/usr/bin/resolvconf \
    --with-session-tracking=systemd \
    --with-modem-manager-1 \
    --disable-static \
    --enable-more-warnings=no \
    --disable-wimax \
    --enable-modify-system \
    --enable-doc \
    --enable-ifupdown

  make
}

package() {
  cd $_pkgname-$pkgver
  make DESTDIR="$pkgdir" install

  install -m644 ../NetworkManager.conf "$pkgdir/etc/NetworkManager/"
  install -m755 -d "$pkgdir/etc/NetworkManager/dnsmasq.d"

  rm -r "$pkgdir/var/run"
}
