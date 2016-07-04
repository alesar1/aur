# Maintainer: <aggraef at gmail.com>
# Contributor: <aggraef at gmail.com>

# This is Jonathan Wilkes' nw.js variant of Pd-L2Ork nick-named "Purr-Data".
# Basically, it is Pd-L2Ork with the Tk GUI replaced with a JavaScript GUI
# implemented using nw.js (http://nwjs.io/).

# NOTE: This is experimental ALPHA software which is still heavily under
# development, so expect some bugs. If you want a version of Pd-L2Ork ready
# for production use, use the pd-l2ork or pd-l2ork-git package instead.

# This package can be installed as a drop-in replacement for pd-l2ork, but
# currently the two cannot be installed together. Like the pd-l2ork package,
# this package *can* be installed along with pd or pd-extended, however. To
# avoid conflicts with these, cyclist, pdsend and pdreceive can be found under
# /usr/lib/pd-l2ork/bin instead. Likewise, the Gem include files get installed
# under /usr/include/pd-l2ork.

pkgname=purr-data-git
pkgver=r2754.b3ad47a
pkgrel=1
pkgdesc="Jonathan Wilkes' nw.js variant of Pd-L2Ork (git version)"
url="https://git.purrdata.net/jwilkes/purr-data"
arch=('i686' 'x86_64')
license=('BSD')
depends=('bluez-libs' 'desktop-file-utils' 'dssi' 'fftw'
  'flite1' 'fluidsynth' 'freeglut' 'ftgl' 'glew' 'gmerlin'
  'gsl' 'gsm' 'hicolor-icon-theme' 'imagemagick' 'jack' 'ladspa' 'lame'
  'libdc1394' 'libdv' 'libgl' 'libiec61883' 'libjpeg' 'libquicktime'
  'libxxf86vm' 'libtiff' 'libiec61883' 'libunicap' 'libraw1394'
  'libsndobj-git' 'libv4l' 'libvorbis' 'lua51' 'portaudio'
  'smpeg' 'speex' 'stk' 'tk' 'tkpng' 'vlc' 'xapian-tcl-bindings' 'zlib'
  'alsa-lib' 'gconf' 'gtk2' 'nss' 'libxtst' 'libxss' 'ttf-dejavu')
makedepends=('autoconf' 'automake' 'libtool' 'git')
provides=('purr-data' 'pd-l2ork')
conflicts=('purr-data' 'pd-l2ork' 'pd-l2ork-git')
install=purr-data.install
options=('!makeflags')
source=("$pkgname::git+https://git.purrdata.net/jwilkes/purr-data.git"
	"Gem-pix_colorclassify.patch"
	"RTcmix-pd-LCPLAY-stabilize.patch")
md5sums=('SKIP'
         '33dc1880e38ac8dbc7aa5075bfe49abd'
         '39c53063dc18681f29b12c08d9c453aa')
# nw.js sdk binaries
nwjsname=nwjs-sdk
nwjsver=0.15.4
source_common="http://dl.nwjs.io/v$nwjsver/$nwjsname-v$nwjsver-linux"
source_i686=("$source_common-ia32.tar.gz")
source_x86_64=("$source_common-x64.tar.gz")
md5sums_i686=('ab052c9580d9e9016cdd720f8f832337')
md5sums_x86_64=('53d2c4fa98eae97b57e33a8ae49a0612')

if [ "$CARCH" = "i686" ]; then
  _arch="ia32"
elif [ "$CARCH" = "x86_64" ]; then
  _arch="x64"
fi

pkgver() {
  cd $srcdir/$pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd $srcdir/$pkgname
  # check out the latest source of all submodules
  git submodule update --init
  # copy the nw.js sources to where purr-data wants them
  cp -a $srcdir/$nwjsname-v$nwjsver-linux-$_arch pd/nw/nw
  # make the sources compile with gcc 6.1+
  cd $srcdir/$pkgname/Gem && patch -Np1 < $srcdir/Gem-pix_colorclassify.patch
  cd $srcdir/$pkgname/l2ork_addons/rtcmix-in-pd && patch -Np1 < $srcdir/RTcmix-pd-LCPLAY-stabilize.patch
}

build() {
  unset CFLAGS
  unset LDFLAGS
  unset INCLUDES

  cd $srcdir/$pkgname/l2ork_addons
  ./tar_em_up.sh -B -n
}

package() {
  cd "$srcdir/$pkgname/packages/linux_make/build"
  cp -a * "$pkgdir"
  # Remove init.d-related stuff.
  cd "$pkgdir/etc"
  rm -rf default init.d
  # Remove the included DejaVu font, it's in the standard repos.
  cd "$pkgdir/usr"
  rm -f lib/pd-l2ork/bin/DejaVuSansMono.ttf
  # Move pdsend and pdreceive to avoid conflicts with other Pd versions.
  mv bin/cyclist bin/pdreceive bin/pdsend lib/pd-l2ork/bin
  # Get rid of the corresponding manpages
  rm -f share/man/man1/pdreceive.* share/man/man1/pdsend.*
  # Move the Gem include files into the pd-l2ork include directory to prevent
  # conflicts with other packages providing these files.
  mv include/Gem include/pd-l2ork
  # Edit the Gem pkgconfig file accordingly and rename it.
  sed -e 's?/include?/include/pd-l2ork?g' -e 's?/lib/pd/extra?/lib/pd-l2ork/extra?g' < lib/pkgconfig/Gem.pc > lib/pkgconfig/pd-l2ork-Gem.pc && rm -f lib/pkgconfig/Gem.pc
  # The Japanese filename causes woes with pacman, remove it.
  #rm -f lib/pd-l2ork/doc/manuals/StartHere/+ここからスタート.pd
  # Remove libtool archives and extra object files.
  rm -f lib/pd-l2ork/extra/*/*.la lib/pd-l2ork/extra/*/*.pd_linux_o
  # Sanitize permissions.
  cd "$pkgdir"
  chmod -R go-w *
  chmod -R a+r *
  chmod a-x usr/lib/pd-l2ork/default.settings
  find usr/lib/pd-l2ork/bin/nw -executable -not -type d | xargs chmod a+x
  #find . -executable -name '*.pd_linux' | xargs chmod a-x
  find . -executable -name '*.pd' | xargs chmod a-x
  find . -executable -name '*.txt' | xargs chmod a-x
  find . -executable -name '*.aif*' | xargs chmod a-x
  find . -type d | xargs chmod a+x
}

# vim:set ts=2 sw=2 et:
