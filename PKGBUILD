# Maintainer: Taijian <taijian@posteo.de>
# Contributor: Sebastian Lau <lauseb644 _at_ gmail _dot_ com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Damian01w <damian01w@gmail.com>

_pkgbase=gdm
pkgbase=gdm-plymouth-nox
pkgname=(gdm-plymouth-nox libgdm-plymouth-nox)
pkgver=3.36.2
pkgrel=1
pkgdesc="Display manager and login screen with plymouth support but without X"
url="https://wiki.gnome.org/Projects/GDM"
arch=(x86_64)
license=(GPL)
depends=(plymouth gnome-shell gnome-session upower) # xorg-xrdb xorg-server xorg-xhost
makedepends=(gobject-introspection git docbook-xsl) # yelp-tools 
checkdepends=(check)
_commit=02c42c1ca84bc28928618b773c12f2cea67ed71e  # tags/3.36.2^0
source=("git+https://gitlab.gnome.org/GNOME/gdm.git#commit=$_commit"
        0001-Xsession-Don-t-start-ssh-agent-by-default.patch
        0002-pam-arch-Don-t-check-greeter-account-for-expiry.patch
        0003-pam-arch-Restrict-greeter-service-to-the-gdm-user.patch)
sha256sums=('SKIP'
            '7a9a60ac3ec2a7ba8625ebd8974ac19469412e596d823d889628c971d3a27463'
            '15c8d7e0a0e03cb45f6bb33b3d91e0332d5d1b835b4aee726118085a35f3b046'
            '58105ba0634279e00729180831f82e85342167c6ac324a26e6f8b16483fb4018')
install=gdm.install

pkgver() {
  cd gdm
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  mkdir -p build
  cd gdm
  patch -Np1 -i ../0001-Xsession-Don-t-start-ssh-agent-by-default.patch

# https://bugs.archlinux.org/task/63706
  patch -Np1 -i ../0002-pam-arch-Don-t-check-greeter-account-for-expiry.patch
  patch -Np1 -i ../0003-pam-arch-Restrict-greeter-service-to-the-gdm-user.patch

  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd build
  ../gdm/configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib \
    with_dbus_sys=/usr/share/dbus-1/system.d \
    --disable-schemas-compile \
    --disable-static \
    --enable-ipv6 \
    --with-default-pam-config=arch \
    --with-default-path=/usr/local/bin:/usr/local/sbin:/usr/bin \
    --with-plymouth \
    --without-tcp-wrappers

  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make
}

check() {
  make -C build check
}

package_gdm-plymouth-nox() {
  depends+=(libgdm-plymouth-nox)
  optdepends=('fprintd: fingerprint authentication')
  provides=("gdm")
  conflicts=("gdm")
  backup=(etc/pam.d/gdm-autologin etc/pam.d/gdm-fingerprint etc/pam.d/gdm-launch-environment
          etc/pam.d/gdm-password etc/pam.d/gdm-smartcard etc/gdm/custom.conf
          etc/gdm/Xsession etc/gdm/PostSession/Default etc/gdm/PreSession/Default)
  groups=(gnome)

  DESTDIR="$pkgdir" make -C build install

  chown -Rc 120:120 "$pkgdir/var/lib/gdm"

  # Unused or created at start
  rm -r "$pkgdir"/var/{cache,log,run}

  install -Dm644 /dev/stdin "$pkgdir/usr/lib/sysusers.d/gdm.conf" <<END
g gdm 120 -
u gdm 120 "Gnome Display Manager" /var/lib/gdm
END

### Split libgdm
  mkdir -p libgdm/{lib,share}
  mv -t libgdm       "$pkgdir"/usr/include
  mv -t libgdm/lib   "$pkgdir"/usr/lib/{girepository-1.0,libgdm*,pkgconfig}
  mv -t libgdm/share "$pkgdir"/usr/share/{gir-1.0,glib-2.0}
}

package_libgdm-plymouth-nox() {
  pkgdesc="GDM support library with plymouth support"
  depends=(systemd glib2 dconf)
  provides=("libgdm")
  conflicts=("libgdm")
  mv libgdm "$pkgdir/usr"
}
