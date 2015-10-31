# Maintainer: Alexey D. <lq07829icatm@rambler.ru>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>
# Contributor: Corrado Primier <bardo@aur.archlinux.org>
# Contributor: William Rea <sillywilly@gmail.com>

pkgname=libpulse-nosystemd
_pkgbase=pulseaudio
pkgdesc="Client library for PulseAudio"
pkgver=7.1
pkgrel=1
arch=(i686 x86_64)
url="http://www.freedesktop.org/wiki/Software/PulseAudio"
license=(LGPL)
depends=(dbus libasyncns libcap libxtst libsm libsndfile json-c)
makedepends=(libasyncns libcap attr libxtst libsm libsndfile libtool rtkit
             speexdsp tdb dbus avahi bluez bluez-libs gconf intltool jack2-dbus sbc
             lirc openssl xenstore fftw orc json-c gtk3 webrtc-audio-processing
             check libsoxr)
provides=("libpulse=${pkgver}")
conflicts=('libpulse')
replaces=('libpulse')
backup=(etc/pulse/client.conf)
options=(!emptydirs)
source=(http://freedesktop.org/software/$_pkgbase/releases/$_pkgbase-$pkgver.tar.xz
        padsp-lib32.patch)
sha256sums=('e667514a28328f92aceea754a224a0150dddfe7e9a71b4c6d31489220153b9d9'
            '7832fc59df76538ff10aedd297c03cb7ff117235da8bfad26082994bb5b84332')

prepare() {
  cd $_pkgbase-$pkgver
}

build() {
  cd $_pkgbase-$pkgver

  DATADIRNAME=share ./configure --prefix=/usr \
    --sysconfdir=/etc \
    --libexecdir=/usr/lib \
    --localstatedir=/var \
    --with-udev-rules-dir=/usr/lib/udev/rules.d \
    --with-database=tdb \
    --disable-tcpwrap \
    --disable-bluez4 \
    --disable-samplerate \
    --disable-rpath \
    --disable-default-build-tests \
    --disable-systemd-daemon \
    --disable-systemd-login \
    --disable-systemd-journal

  # fight unused direct deps
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make
}

package() {
  cd $_pkgbase-$pkgver
  make -j1 DESTDIR="$pkgdir"/temp install

  cd "$pkgdir"

  # Extract libpulse
  mkdir -p {etc/pulse,usr/{bin,lib/pulseaudio,share/man/man{1,5}}}

  mv {temp/,}etc/pulse/client.conf

  mv temp/usr/bin/pa{cat,ctl,dsp,mon,play,rec,record} \
     usr/bin

  mv temp/usr/lib/libpulse{,-simple,-mainloop-glib}.so* \
     temp/usr/lib/{cmake,pkgconfig} \
     usr/lib

  mv temp/usr/lib/pulseaudio/libpulsedsp.so \
     temp/usr/lib/pulseaudio/libpulsecommon-*.so \
     usr/lib/pulseaudio

  mv {temp/,}usr/include

  mv temp/usr/share/man/man1/pa{cat,ctl,dsp,mon,play,rec,record}.1 \
     usr/share/man/man1

  mv {temp/,}usr/share/man/man5/pulse-client.conf.5
  mv {temp/,}usr/share/vala

  rm -rf temp

  # Fix working padsp with 32-bit applications
  patch -Np1 -i "$srcdir/padsp-lib32.patch"
}
