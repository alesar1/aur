# Maintainer: Matt/ilikenwf <parwok@gmail.com>
# based on firefox-dev
# Contributor: <jnbek1972 at gmail dot com>
# Contributor: <raku at rakutiki.tv>
pkgname=waterfox-git
pkgver=56.2.10+c575e467374e
pkgrel=1
pkgdesc="64-Bit optimized Firefox fork, no data collection, allows unsigned extensions"
arch=('i686' 'x86_64')
license=('MPL')
url="https://www.waterfoxproject.org/"
depends=('gtk2' 'gtk3' 'mozilla-common' 'libxt' 'startup-notification'
         'dbus-glib' 'alsa-lib' 'ffmpeg' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite' 'ttf-font')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake' 'gconf'
             'xorg-server-xvfb' 'libpulse' 'inetutils' 'autoconf2.13' 'clang' 'llvm' 'cargo')
provides=("waterfox=$pkgver")
conflicts=('waterfox' 'waterfox-bin')
install=waterfox.install
options=('!emptydirs' '!makeflags' '!strip')
source=(git://github.com/MrAlex94/Waterfox
        mozconfig
        waterfox.desktop
        firefox-install-dir.patch
        clang-profile.patch
        vendor.js)
sha512sums=('SKIP'
            'ab4db1561a7b3c0c036879fdb9497f2d0df7157c92591b6303af05afd9e53dcbc388038ecc8fd647c56cb82772eb56a55f7c66564468e705cde3193e03e5a246'
            '93937770fa66d63f69c6283ed1f19ac83b9c9c4f5cc34e79d11ac31676462be9f7f37bcd35e785ceb8c7d234a09236d1f26b21e551b622854076fb21bcda44d3'
            '266989b0c4a37254a40836a6193284a186230b48716907e4d249d73616f58382b258c41baa8c1ffc98d405f77bfafcd3438f749edcf391c7bd22185399adf4bd'
            '01f3ada0d121bc8c5a698356aae5f8d5374b3bd5a1023f02ebc9ec6600b4652f4ab7d7ef339df268bfe5054d2a58320d91e79af31e6609b74ba924aef62116e0'
            'd927e5e882115c780aa0d45034cb1652eaa191d95c15013639f9172ae734245caae070018465d73fdf86a01601d08c9e65f28468621422d799fe8451e6175cb7')
            
# don't compress the package - we're just going to uncompress during install in a moment
PKGEXT='.pkg.tar'   

# use pgo?
# don't, it's broken again...and my patch doesn't fix it, something makes the build puke
_pgo=0
           
pkgver() {
	cd Waterfox
	echo $(cat browser/config/version.txt)"+"$(git rev-parse --short HEAD)
}

prepare() {
  cd Waterfox

  cp ../mozconfig .mozconfig

  # lcrmf breaks stuff
  sed -i 's/ \-lcrmf//g' "${srcdir}/Waterfox/old-configure.in"
  
  # alter the install dir
  patch -Np1 -i ../firefox-install-dir.patch

  if [[ $_pgo = 1 ]]; then
    # these fix PGO but something recently broke the tests
    patch -Np1 -i ../clang-profile.patch
    
    echo "mk_add_options PROFILE_GEN_SCRIPT='EXTRA_TEST_ARGS=10 \$(MAKE) -C \$(MOZ_OBJDIR) pgo-profile-run'" >>.mozconfig 
    echo "export MOZ_PGO=1" >>.mozconfig
	sed -i 's/disable-tests/enable-tests/g' .mozconfig
  fi
  
  mkdir -p "$srcdir/path"
}

build() {
  cd Waterfox

  export PATH="$srcdir/path:$PATH"
  export PYTHON="/usr/bin/python2"

  if [[ $CARCH = x86_64 ]] && [[ $_pgo = 1 ]]; then
    msg2 'PGO build is selected'
    
	# LTO needs more open files
	ulimit -n 4096

    # this requires you to build within an X console
    # you may have to close waterfox when the profile generating version of it loads up
    make -j -f client.mk profiledbuild    
	#xvfb-run -a -n 97 -s "-screen 0 1600x1200x24" ./mach build
	#./mach buildsymbols
  else
    msg2 'Non-PGO build is selected or your architecture is not x86_64'
    make -j -f client.mk build
  fi
}

package() {
  cd Waterfox
  mkdir -p "$pkgdir"
  DESTDIR="$pkgdir" make -f client.mk install

  install -Dm644 ../vendor.js "$pkgdir/opt/waterfox/browser/defaults/preferences/vendor.js"

  for i in 16 32 48; do
      install -Dm644 "$srcdir/Waterfox/obj-x86_64-pc-linux-gnu/dist/waterfox/browser/chrome/icons/default/default$i.png" \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/waterfox.png"
  done

  install -Dm644 "$srcdir/Waterfox/obj-x86_64-pc-linux-gnu/dist/waterfox/browser/icons/mozicon128.png" \
    "$pkgdir/usr/share/icons/hicolor/64x64/apps/waterfox.png"
  install -Dm644 "$srcdir/Waterfox/obj-x86_64-pc-linux-gnu/dist/waterfox/browser/icons/mozicon128.png" \
    "$pkgdir/usr/share/icons/hicolor/128x128/apps/waterfox.png"
  install -Dm644 browser/branding/official/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/waterfox.png"
  install -Dm644 browser/branding/official/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/waterfox.png"

  install -Dm644 ../waterfox.desktop \
    "$pkgdir/usr/share/applications/waterfox.desktop"

  # Use system-provided dictionaries
  rm -rf "$pkgdir"/opt/waterfox/{dictionaries,hyphenation}
  ln -s /usr/share/hunspell "$pkgdir/opt/waterfox"
  ln -s /usr/share/hyphen "$pkgdir/opt/waterfox"
}

