
# Maintainer: Pieter van der Kloet <pvdkloet@gmail.com>
pkgname=openmw-git
pkgver=20120220
pkgrel=1
pkgdesc="OpenMW is a open-source engine reimplementation for the role-playing game Morrowind."
arch=('i686' 'x86_64')
url="http://www.openmw.org"
license=('GPL3')

depends=('openal' 'ogre-1.7.2' 'bullet-svn' 'ffmpeg' 'mpg123' 'libsndfile' 'qt')

makedepends=('git' 'cmake' 'boost')
install=$pkgname.install
conflicts=('openmw')

_gitroot="git://github.com/zinnschlag/openmw.git"
_gitname="openmw"

build() {
  msg "Connecting to GIT server...."

  if [ -d "$_gitname" ] ; then
    cd "$_gitname" && git pull origin
    git submodule update
    msg "The local files are updated."
  else
    cd "$srcdir"
    git clone "$_gitroot" "$_gitname"
    cd "$_gitname"
    git submodule update --init
  fi

  msg "GIT checkout done or server timeout"
  msg "Starting make..."

  cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=RelWithDebInfo
  make

  # Install
  # There is currently no make install so we do this manually

  # Binaries
  install -d -m755 "$pkgdir"/usr/bin
  install -m755 openmw "$pkgdir"/usr/bin/
  install -m755 omwlauncher "$pkgdir"/usr/bin/
  install -m755 esmtool "$pkgdir"/usr/bin/

  # Config files
  # Replace resources location
  sed -i 's,resources=resources,resources=/usr/share/openmw/resources,' openmw.cfg.install || exit 1

  install -d -m755 "$pkgdir"/etc/openmw
  install -m644 openmw.cfg.install "$pkgdir"/etc/openmw/openmw.cfg
  install -m644 plugins.cfg "$pkgdir"/etc/openmw/

  # Stylesheet
  install -m644 launcher.qss "$pkgdir"/etc/openmw/
  ln -s -T /etc/openmw/launcher.qss "$pkgdir"/usr/bin/launcher.qss || exit 1

  # Desktop file and icon
  install -d -m755  "$pkgdir"/usr/share/applications
  install -m644 files/openmw.desktop "$pkgdir"/usr/share/applications/

  install -d -m755 "$pkgdir"/usr/share/pixmaps
  install -m644 apps/launcher/resources/images/openmw.png "$pkgdir"/usr/share/pixmaps/

  # Resources
  install -d -m755 "$pkgdir"/usr/share/openmw
  cp -r resources "$pkgdir"/usr/share/openmw/ || exit 1

}


