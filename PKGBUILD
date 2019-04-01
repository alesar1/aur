# Maintainer: Matt/ilikenwf <parwok@gmail.com>
# based on firefox-dev
# Contributor: <jnbek1972 at gmail dot com>
# Contributor: <raku at rakutiki.tv>
pkgname=waterfox-git
pkgver=56.2.8+74fd7c3a2b50
pkgrel=1
pkgdesc="64-Bit optimized Firefox fork, no data collection, allows unsigned extensions"
arch=('i686' 'x86_64')
license=('MPL')
url="https://www.waterfoxproject.org/"
depends=('gtk2' 'gtk3' 'mozilla-common' 'libxt' 'startup-notification'
         'dbus-glib' 'alsa-lib' 'ffmpeg' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite' 'ttf-font')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake' 'gconf'
             'xorg-server-xvfb' 'libpulse' 'inetutils' 'rust<=1:1.32.0-2' 'autoconf2.13' 'clang' 'llvm' 'cargo')
provides=("waterfox=$pkgver")
conflicts=('waterfox' 'waterfox-bin')
install=waterfox.install
options=('!emptydirs' '!makeflags' '!strip')
source=(git://github.com/MrAlex94/Waterfox
        mozconfig
        waterfox.desktop
        firefox-install-dir.patch
        clang-profile.patch
        vendor.js
        default16.png
		default22.png
		default24.png
		default256.png
		default32.png
		default48.png)
sha512sums=('SKIP'
            '4b8edfb97146237721a789ef8a58efc7e2e3e107ed507681891bcae6292669186d58c263e5cf7967e933ed42946261cec234d489805f26eb865afd433f3b23e8'
            '93937770fa66d63f69c6283ed1f19ac83b9c9c4f5cc34e79d11ac31676462be9f7f37bcd35e785ceb8c7d234a09236d1f26b21e551b622854076fb21bcda44d3'
            '266989b0c4a37254a40836a6193284a186230b48716907e4d249d73616f58382b258c41baa8c1ffc98d405f77bfafcd3438f749edcf391c7bd22185399adf4bd'
            '01f3ada0d121bc8c5a698356aae5f8d5374b3bd5a1023f02ebc9ec6600b4652f4ab7d7ef339df268bfe5054d2a58320d91e79af31e6609b74ba924aef62116e0'
            'd927e5e882115c780aa0d45034cb1652eaa191d95c15013639f9172ae734245caae070018465d73fdf86a01601d08c9e65f28468621422d799fe8451e6175cb7'
            '625ea754e70793d80da38878e345fefce579416d9daa04439f1c13885aa2a9620307010fe4cf09460677fe2918bd32b62f4ad52b24bab78d82b4e6487cbe5347'
            '02e844d1a97dd756d185f7258a6c18d52cf7433f3366e147e5ef0cc0b6c023d177b3021521403237162782993d2a27d4459fa5d383e7bf8a034e7f5836351f9d'
            'a038a805a41e55c89cd601a07e6ae756e7017f4eb9eb65525f6cb9d86e2f94bda559961b6ab1e66a0dfa7436db6f1da166c2fc84bfc6cad5fcaec6a82ffb0a96'
            '33afbb1ec2eb62412965bc698bdf1cc3c177645c51369397e92bdba7a7891709ccf1f3d2f9e234866e7c452a3ae8bfe289e0cbfd6047ec5efa1c7c568b9e7888'
            '64f9e8b812d00d39239f9aa00aa51c937113fa3833652d2da318ae8c9627ac7b0372bffc2c1c0a2c1ea69ec97a3dc11fafee58175cbdab503aef299543f3fd90'
            'e5000a4e25bf6a15eae99a1e9b3cc4f9a1712b7aacc783eb0c25b20d04d8bbc9e9e80e95ce8c709aba595f699aa2dc4ba6104ea0f0375b00ff2cc2353d93c8f1')
            
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
  
  # fix missing icons
  for i in 16 22 24 32 48 256; do
	  if [ ! -f "${srcdir}/Waterfox/browser/branding/unofficial/default$i.png" ]; then
		cp "${srcdir}/default$i.png" "${srcdir}/Waterfox/browser/branding/unofficial/default$i.png"
	  fi
  done
  
  mkdir -p "$srcdir/path"
}

build() {
  msg2 'If you do not wish to use rust 1.32 or lower, disable it in your mozconfig first!'
	
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

