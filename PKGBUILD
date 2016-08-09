# Maintainer: Nigel Michki <nigeil@yahoo.com>
pkgname=sonic-pi-git
pkgver=v2.10.0.r716.gdd1f41a
pkgrel=1
pkgdesc="A music-centric programming environment, originally built for the raspberry pi."
arch=('i686' 
      'x86_64')
url="http://sonic-pi.net/"
license=('MIT')
groups=()
conflicts=('sonic-pi')
depends=('sed'
	 'ruby'
	 'libffi'
	 'lua'
	 'qscintilla-qt5'
	 'jack'
    'aubio'
    'qwt')
makedepends=('cmake'
	     'git'
	     'supercollider'
        'qt5-tools')
optdepends=('qjackctl: for graphical jackd spawning/configuration'
	    'jack2: better jackd if you want to use without gui'
       'sc3-plugins-git: plugins for supercollider'
	    'pulseaudio-jack: support for jack2-pulseaudio integration'
       'cadence: easy jack/pulseaudio crossover')
source=('sonic-pi::git+https://github.com/samaaron/sonic-pi.git'
	     'launcher.sh'
        'sonic-pi-git.png'
        'sonic-pi-git.desktop')
md5sums=('SKIP'
         '298e2729cda0c33c9cec7f7f721c1bbd'
         'ba86680be610cc3d6f12d4a89b0f434d'
         'fd330b2be9b52e9bee2fb9922141e2ca')

prepare() {
  msg2 "Hook up qwt to qmake"
  qmake -set QMAKEFEATURES /usr/local/qwt-6.1.2/features
  
  msg2 "Fix wrongly-named (on Arch) QT library"
  #cd $srcdir/sonic-pi/app/gui/qt
  find $srcdir/sonic-pi/app/gui/qt -type f -name "*" -readable -exec sed -i 's/lqt5scintilla2/lqscintilla2-qt5/g' {} +
  #find . -type f -name "*" -exec sed -i 's/+= -L\/Users\/sam\/Downloads\/tmp\/QScintilla-gpl-2.9\/Qt4Qt5/+= -lqscintilla2-qt5/g' {} +
}

build() {
#Based on instructions from INSTALL.md in upstream sources
#Building
  cd $srcdir/sonic-pi
  cd app/server/bin
  ./compile-extensions.rb
  cd ../../gui/qt
  ./rp-build-app
  #Cleaning up object files
  cd $srcdir
  find . -type f -name "*.o" -exec rm {} +
  rm -f $srcdir/sonic-pi/app/gui/qt/sed*
}

pkgver() {
  cd $srcdir/sonic-pi
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

package() {
#Install sources to /opt/
  mkdir $pkgdir/opt/
  mkdir $pkgdir/opt/sonic-pi
  cp -R $srcdir/sonic-pi/* $pkgdir/opt/sonic-pi/ > /dev/null
  ln -s -r $pkgdir/opt/sonic-pi/app/server $pkgdir/opt/sonic-pi/server
#Add a launcher script to /usr/bin
  mkdir $pkgdir/usr
  mkdir $pkgdir/usr/bin
  install -Dm644 "$srcdir/launcher.sh" "$pkgdir/usr/bin/sonic-pi"
  chmod +x $pkgdir/usr/bin/sonic-pi
#Add a desktop entry
  mkdir $pkgdir/usr/share
  mkdir $pkgdir/usr/share/applications
  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  mkdir $pkgdir/usr/share/pixmaps
  install -Dm644 "sonic-pi-git.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
#Install the license to /usr/share/licenses
  #mkdir $pkgdir/usr/share/licenses
  #mkdir $pkgdir/usr/share/licenses/sonic-pi-git
  #install -Dm644 "$srcdir/sonic-pi/app/gui/qt/info/LICENSE.html" "$pkgdir/usr/share/licenses/sonic-pi/LICENSE.html" 
}
