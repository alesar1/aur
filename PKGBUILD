# Contributor: graysky <graysky AT archlinux DOT us>
# Contributor: jiribb <jiribb@gmail.com>
# Contributor: David Spicer <azleifel at googlemail dot com>
# Contributor: Andrew Brouwers
# Contributor: ponsfoot @ AUR
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgbase=handbrake-git
pkgname=('handbrake-gtk-git' 'handbrake-cli-git')
pkgver=r7472
pkgrel=1
pkgdesc="Multiplatform, multithreaded DVD to MPEG-4/H264/Theora converter"
arch=('i686' 'x86_64')
url="http://handbrake.fr/"
license=('GPL')
options=('!makeflags')
md5sums=('SKIP')
makedepends=('libnotify' 'git' 'cmake' 'intltool' 'python2'
	     'gettext' 'subversion' 'yasm' 'jansson' 'paxtest')
source=("git+https://github.com/HandBrake/HandBrake.git")
md5sums=('SKIP')
_gitname="HandBrake"

pkgver() {
  cd "$srcdir"/"$_gitname"
    printf "r%s" "$(git rev-list --count HEAD)"
}

prepare() {
  cd "$srcdir/$_gitname"

  # python2 substitutions
  sed -i -e '1c#! /usr/bin/python2' "gtk/src/makedeps.py"
  sed -i -e '1c#! /usr/bin/python2' "make/configure.py"
}

build() {
  cd "$srcdir"/"$_gitname"

  ./configure --launch --build="build" --prefix=/usr --enable-fdk \
	      --disable-gtk-update-checks --launch-jobs=0 \
	      --enable-x265 --force

  # Create build-specific temporary directory for ffmpeg
  install -d -m755 "build/build_tmp"

  make -C "build" TMPDIR="$srcdir/$_gitname/build/build_tmp"
  /usr/lib/paxtest/execstack -c "$srcdir/$_gitname/build/HandBrakeCLI"
  /usr/lib/paxtest/execstack -c "$srcdir/$_gitname/build/gtk/src/ghb"
}

package_handbrake-gtk-git() {
  pkgdesc="Multiplatform, multithreaded DVD to MPEG-4/H264/Theora converter (GUI version)"
  depends=('gtk3' 'dbus-glib' 'gst-plugins-base-libs' 'jansson'
	   'libnotify' 'libsamplerate' 'libx264' 'libtheora' 'lame'
	   'libass')
  optdepends=('gst-plugins-bad: For Preview Window'
              'gst-plugins-good: For Preview Window'
              'gst-plugins-ugly: For Preview Window'
              'gst-libav: For Preview Window')
  provides=('handbrake')
  conflicts=('handbrake')

  cd "$srcdir"/"$_gitname"
  make -C "build" DESTDIR="$pkgdir/" install

  rm -f "$pkgdir/usr/bin/HandBrakeCLI"

  # icon-theme.cache will be rebuilt on install
  rm -f "$pkgdir/usr/share/icons/hicolor/icon-theme.cache"
}

package_handbrake-cli-git() {
  pkgdesc="Multiplatform, multithreaded DVD to MPEG-4/H264/Theora converter (CLI version)"
  depends=('jansson' 'libsamplerate' 'libx264' 'libtheora' 'lame'
	   'libass' 'libxml2')
  makedepends=('cmake' 'intltool' 'python2' 'gettext' 'subversion' 'yasm' 'prelink')
  provides=('handbrake-cli')
  conflicts=('handbrake-cli')

  install -D -m755 "$srcdir/$_gitname/build/HandBrakeCLI" "$pkgdir/usr/bin/HandBrakeCLI"
}
