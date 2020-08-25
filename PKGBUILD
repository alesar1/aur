# Maintainer: Taijian <taijian@posteo.de>
# Contributor: Sebastian Lau <lauseb644 _at_ gmail _dot_ com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Damian01w <damian01w@gmail.com>

_pkgbase=gdm
pkgbase=gdm-plymouth-nox
pkgname=(gdm-plymouth-nox libgdm-plymouth-nox)
pkgver=3.36.3
pkgrel=3
pkgdesc="Display manager and login screen with plymouth support, but without xorg-server"
url="https://wiki.gnome.org/Projects/GDM"
arch=(x86_64)
license=(GPL)
depends=(plymouth gnome-shell gnome-session upower) # xorg-xrdb xorg-server xorg-xhost
makedepends=(gobject-introspection git docbook-xsl) # yelp-tools 
checkdepends=(check)
_commit=24a4c0afe337a7a381397c87a39e3a666c0ae6cc  # tags/3.36.3^0
source=("git+https://gitlab.gnome.org/GNOME/gdm.git#commit=$_commit"
        0001-Xsession-Don-t-start-ssh-agent-by-default.patch
        0002-pam-arch-Don-t-check-greeter-account-for-expiry.patch
        0003-pam-arch-Restrict-greeter-service-to-the-gdm-user.patch
        0004-pam-arch-Update-to-match-pambase-20200721.1-2.patch)
sha256sums=('SKIP'
            '5a32db412fc5256e16691e8f2db0b460bafbbb2be8eb9b9bcc71b5cd49688f9e'
            'e879a982467a62c4c1557067dbdef6b56a774273df1368a60c4b036015111cdd'
            '4648e7b920ccb14d8a87634c3c98d51ff13163ae2fc9fc4a3c2e9ec876515469'
            'ba98385cf1de00560f77d75a241b1895567c6b8d4babf230d10ae7fd19739fda')

pkgver() {
  cd $_pkgbase
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  mkdir -p build
  cd $_pkgbase
  patch -Np1 -i ../0001-Xsession-Don-t-start-ssh-agent-by-default.patch

  # https://bugs.archlinux.org/task/63706
  patch -Np1 -i ../0002-pam-arch-Don-t-check-greeter-account-for-expiry.patch
  patch -Np1 -i ../0003-pam-arch-Restrict-greeter-service-to-the-gdm-user.patch

  # https://bugs.archlinux.org/task/67485
  patch -Np1 -i ../0004-pam-arch-Update-to-match-pambase-20200721.1-2.patch

  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd build
  ../$_pkgbase/configure \
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
  install=gdm.install

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
