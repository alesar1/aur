# Maintainer: Mitchell Renouf <mitchellarenouf@gmail.com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>
# Contributor: Corrado Primier <bardo@aur.archlinux.org>
# Contributor: William Rea <sillywilly@gmail.com>

pkgbase=pulseaudio-aptx
pkgname=(pulseaudio-aptx libpulse-aptx pulseaudio-aptx-{zeroconf,lirc,jack,bluetooth,equalizer})
pkgdesc="A featureful, general-purpose sound server with aptx over a2dp"
pkgver=12.2
provides=("pulseaudio=${pkgver}" "libpulse=${pkgver}" "pulseaudio-zeroconf=${pkgver}" "pulseaudio-lirc=${pkgver}" "pulseaudio-jack=${pkgver}" "pulseaudio-bluetooth=${pkgver}" "pulseaudio-equalizer=${pkgver}")
replaces=(pulseaudio libpulse pulseaudio-{zeroconf,lirc,jack,bluetooth,equalizer})

pkgrel=2
arch=(x86_64)
url="https://www.freedesktop.org/wiki/Software/PulseAudio/"
license=(GPL)
makedepends=(libasyncns libcap attr libxtst libsm libsndfile libtool rtkit libsoxr
             speexdsp tdb systemd dbus avahi bluez bluez-libs intltool jack2-dbus sbc
             lirc openssl fftw orc gtk3 webrtc-audio-processing
             check autoconf-archive git libopenaptx)
options=(!emptydirs)
_commit=ee910cf6daa5120ab534eb2e6c573d94b9b182e7  # tags/v12.2^0
source=("git+https://gitlab.freedesktop.org/pulseaudio/pulseaudio.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd pulseaudio
  git describe --tags | sed 's/^v//;s/-/+/g'
}

prepare() {
  cd pulseaudio
  patch -Np1 -i "../../v2-1-2-Modular-API-for-Bluetooth-A2DP-codec.patch"
  patch -Np1 -i "../../v2-2-2-Bluetooth-A2DP-aptX-codec-support.patch"
  NOCONFIGURE=1 ./bootstrap.sh
}

build() {
  cd pulseaudio

  ./configure --prefix=/usr \
    --sysconfdir=/etc \
    --libexecdir=/usr/lib \
    --localstatedir=/var \
    --with-udev-rules-dir=/usr/lib/udev/rules.d \
    --with-pulsedsp-location='/usr/\\$$LIB/pulseaudio' \
    --with-database=tdb \
    --disable-tcpwrap \
    --disable-bluez4 \
    --disable-samplerate \
    --disable-rpath \
    --disable-default-build-tests \
    DATADIRNAME=share

  # fight unused direct deps
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make
}

package_pulseaudio-aptx() {
  depends=("libpulse-aptx=$pkgver-$pkgrel" rtkit libltdl speexdsp tdb orc libsoxr
           webrtc-audio-processing)
  optdepends=('pulseaudio-alsa: ALSA configuration (recommended)')
  backup=(etc/pulse/{daemon.conf,default.pa,system.pa})
  install=pulseaudio.install
  replaces=('pulseaudio-xen<=9.0' 'pulseaudio-gconf<=11.1')

  cd pulseaudio

  _pulsever=$(./git-version-gen .tarball-version)
  while [[ $_pulsever = *.*.* ]]; do
    _pulsever=${_pulsever%.*}
  done
  _pulsever=${_pulsever%%-*}

  make -j1 DESTDIR="$pkgdir" install \
    bashcompletiondir=/usr/share/bash-completion/completions

  cd "$pkgdir"

  # Assumes that any volume adjustment is intended by the user, who can control
  # each app's volume. Misbehaving clients can trigger earsplitting volume
  # jumps. App volumes can diverge wildly and cause apps without their own
  # volume control to fall below sink volume; a sink-only volume control will
  # suddenly be unable to make such an app loud enough.
  sed -e '/flat-volumes/iflat-volumes = no' \
      -i etc/pulse/daemon.conf

  # Superseded by socket activation
  sed -e '/autospawn/iautospawn = no' \
      -i etc/pulse/client.conf

  # Disable cork-request module, can result in e.g. media players unpausing
  # when there's a Skype call incoming
  sed -e 's|/usr/bin/pactl load-module module-x11-cork-request|#&|' \
      -i usr/bin/start-pulseaudio-x11

  # Required by qpaeq
  sed -e '/Load several protocols/aload-module module-dbus-protocol' \
      -i etc/pulse/default.pa

  rm etc/dbus-1/system.d/pulseaudio-system.conf

### Split libpulse

  mkdir -p "$srcdir"/libpulse/{etc/pulse,usr/{bin,lib/pulseaudio,share/man/man{1,5}}}

  mv etc/pulse/client.conf \
     "$srcdir/libpulse/etc/pulse"

  mv usr/bin/pa{cat,ctl,dsp,mon,play,rec,record} \
     "$srcdir/libpulse/usr/bin"

  mv usr/lib/libpulse{,-simple,-mainloop-glib}.so* \
     usr/lib/{cmake,pkgconfig} \
     "$srcdir/libpulse/usr/lib"

  mv usr/lib/pulseaudio/libpulse{dsp,common-*}.so \
     "$srcdir/libpulse/usr/lib/pulseaudio"

  mv usr/include \
     "$srcdir/libpulse/usr"

  mv usr/share/man/man1/pa{cat,ctl,dsp,mon,play,rec,record}.1 \
     "$srcdir/libpulse/usr/share/man/man1"

  mv usr/share/man/man5/pulse-client.conf.5 \
     "$srcdir/libpulse/usr/share/man/man5"

  mv usr/share/vala \
     "$srcdir/libpulse/usr/share"

### Split modules

  mkdir -p "$srcdir"/{zeroconf,lirc,jack,bluetooth,equalizer}/usr/lib/pulse-$_pulsever/modules \
           "$srcdir"/equalizer/usr/bin

  mv usr/lib/pulse-$_pulsever/modules/{libavahi-wrap,module-{zeroconf-{publish,discover},raop-discover}}.so \
     "$srcdir/zeroconf/usr/lib/pulse-$_pulsever/modules"

  mv usr/lib/pulse-$_pulsever/modules/module-lirc.so \
     "$srcdir/lirc/usr/lib/pulse-$_pulsever/modules"

  mv usr/lib/pulse-$_pulsever/modules/module-jack{-sink,-source,dbus-detect}.so \
     "$srcdir/jack/usr/lib/pulse-$_pulsever/modules"

  mv usr/lib/pulse-$_pulsever/modules/{libbluez5-util,module-{bluetooth-{discover,policy},bluez5-{discover,device}}}.so \
     "$srcdir/bluetooth/usr/lib/pulse-$_pulsever/modules"

  mv usr/lib/pulse-$_pulsever/modules/module-equalizer-sink.so \
     "$srcdir/equalizer/usr/lib/pulse-$_pulsever/modules"
  mv usr/bin/qpaeq \
     "$srcdir/equalizer/usr/bin"
}

package_libpulse-aptx() {
  pkgdesc="$pkgdesc (client library)"
  depends=(dbus libasyncns libcap libxtst libsm libsndfile systemd)
  license=(LGPL)
  backup=(etc/pulse/client.conf)

  mv "$srcdir"/libpulse/* "$pkgdir"
}

package_pulseaudio-aptx-zeroconf(){
  pkgdesc="Zeroconf support for PulseAudio"
  depends=("pulseaudio=$pkgver-$pkgrel" avahi openssl)

  mv "$srcdir"/zeroconf/* "$pkgdir"
}

package_pulseaudio-aptx-lirc(){
  pkgdesc="IR (lirc) support for PulseAudio"
  depends=("pulseaudio=$pkgver-$pkgrel" lirc)

  mv "$srcdir"/lirc/* "$pkgdir"
}

package_pulseaudio-aptx-jack(){
  pkgdesc="Jack support for PulseAudio"
  depends=("pulseaudio=$pkgver-$pkgrel" jack)

  mv "$srcdir"/jack/* "$pkgdir"
}

package_pulseaudio-aptx-bluetooth(){
  pkgdesc="Bluetooth support for PulseAudio"
  depends=("pulseaudio=$pkgver-$pkgrel" bluez bluez-libs sbc)

  mv "$srcdir"/bluetooth/* "$pkgdir"
}

package_pulseaudio-aptx-equalizer(){
  pkgdesc="Equalizer for PulseAudio"
  depends=("pulseaudio=$pkgver-$pkgrel" python-{pyqt5,dbus,sip} fftw)

  mv "$srcdir"/equalizer/* "$pkgdir"
}
