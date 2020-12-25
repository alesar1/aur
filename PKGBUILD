# Maintainer: Matt/ilikenwf <parwok@gmail.com>
pkgname=waterfox-g3-git
pkgver=78.6.0+cf61d2db8f63
pkgrel=1
pkgdesc="Private and optimized Firefox fork based on the LTS Release of Firefox."
arch=('i686' 'x86_64')
license=('MPL')
url="https://www.waterfoxproject.org/"
depends=(gtk3 libffi libvpx icu libevent mozilla-common libxt startup-notification mime-types dbus-glib
         ffmpeg nss ttf-font libpulse)
makedepends=(unzip zip diffutils python2-setuptools yasm mesa imake inetutils
             xorg-server-xvfb autoconf2.13 rust mercurial clang llvm jack gtk2
             python nodejs python2-psutil cbindgen nasm)
optdepends=('libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English')
options=(!emptydirs !makeflags)
provides=('waterfox-g3')
conflicts=('waterfox-g3-bin')
install=waterfox-g3.install
options=('!emptydirs' '!makeflags' '!strip')
source=(git://github.com/MrAlex94/Waterfox#branch=future
        mozconfig
        waterfox-g3.desktop
        ignore_bad_validator.patch
	https://git.savannah.gnu.org/cgit/gnuzilla.git/plain/data/patches/disable-settings-services.patch
	https://git.savannah.gnu.org/cgit/gnuzilla.git/plain/data/patches/duckduckgo-no-params.patch
        vendor.js)
sha512sums=('SKIP'
            '3b71a64fa08b087025f05931b385a6881a9649e763414b2de8ad392cd6d262ccdc13b828536d624fda00946826609165c5a8010803c996dec2c3ce49155c5426'
            '36d0568a5d7e06a98002e2320adf130a0d0025d9d7717316a2df0247fea406eb79dce527261eba146d413e3b18df19adaf362d96399d3712b1f478aae1944a26'
            'ab2aced2e371afad317ab3ffb3e8161c457f022327e182d426aa2ba4142112060225ced4610eb2525e1c739a4e56ad4e7cf78cc102232cf01cf06d0224a9c09d'
            '243f6aa749057f5221c1ad9321b183eee767cb7d877df0f24dc4ef3c4e559621f7620f990147d341c6f4cab705df7dae59e8f4c2cfe5cfc4525bf3c3621c77ff'
            '547572a90a0d0eb09c7c46ffd1e2d59b246c8a27f63e8fb950f852847a9dcb3c0d153cc15f9c2d9a7628768bd924957f8e2624377926a2a6473aa04d44154285'
            'd927e5e882115c780aa0d45034cb1652eaa191d95c15013639f9172ae734245caae070018465d73fdf86a01601d08c9e65f28468621422d799fe8451e6175cb7')

# don't compress the package - we're just going to uncompress during install in a moment
PKGEXT='.pkg.tar'   
           
pkgver() {
	cd Waterfox
	echo $(cat browser/config/version.txt)"+"$(git rev-parse --short HEAD)
}

prepare() {
  cd Waterfox

  cp ../mozconfig .mozconfig

  # lcrmf breaks stuff
  sed -i 's/ \-lcrmf//g' "${srcdir}/Waterfox/old-configure.in"

  # the below is a really horrible thing to do but it allows commas in our optimizations to work
  patch -Np1 -i "${srcdir}/ignore_bad_validator.patch"

  # until patched out upstream (icecat)
  patch -Np1 -i "${srcdir}/disable-settings-services.patch"

  # don't send extra params to ddg (icecat)
  patch -Np1 -i "${srcdir}/duckduckgo-no-params.patch"
  
  mkdir -p "$srcdir/path"
}

build() {
  cd Waterfox

  export PATH="$srcdir/path:$PATH"
  export PYTHON="/usr/bin/python2"
  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"

  # LTO needs more open files
  ulimit -n 4096

  xvfb-run -a -n 97 -s "-screen 0 1600x1200x24" ./mach build
}

package() {
  cd Waterfox
  mkdir -p "$pkgdir"
  DESTDIR="$pkgdir" ./mach install
  
  install -Dm644 ../vendor.js "$pkgdir/opt/waterfox-g3/browser/defaults/preferences/vendor.js"

  for i in 16 32 64 48 128; do
      install -Dm644 "$srcdir/Waterfox/obj-x86_64-pc-linux-gnu/dist/waterfox-g3/browser/chrome/icons/default/default$i.png" \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/waterfox-g3.png"
  done

  install -Dm644 "$srcdir/Waterfox/obj-x86_64-pc-linux-gnu/dist/waterfox-g3/browser/chrome/icons/default/default128.png" \
    "$pkgdir/usr/share/icons/hicolor/64x64/apps/waterfox-g3.png"
  install -Dm644 "$srcdir/Waterfox/obj-x86_64-pc-linux-gnu/dist/waterfox-g3/browser/chrome/icons/default/default128.png" \
    "$pkgdir/usr/share/icons/hicolor/128x128/apps/waterfox-g3.png"
  install -Dm644 browser/branding/official/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/waterfox-g3.png"
  install -Dm644 browser/branding/official/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/waterfox-g3.png"

  install -Dm644 ../waterfox-g3.desktop \
    "$pkgdir/usr/share/applications/waterfox-g3.desktop"

  # Use system-provided dictionaries
  rm -rf "$pkgdir/opt/waterfox-g3/"{dictionaries,hyphenation}
  rm -rf "$pkgdir/opt/waterfox-g3/hunspell"
  rm "$pkgdir/opt/waterfox-g3/hunspell"||return 0
  ln -s /usr/bin/hunspell "$pkgdir/opt/waterfox-g3"
  ln -s /usr/share/hyphen "$pkgdir/opt/waterfox-g3"
}

