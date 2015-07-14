# Current maintainer: Samuel Kogler <firstname.lastname at gmail.com>
# Original maintainer: Martin Weinelt <mweinelt@gmail.com>
# Contributor: Bjoern Bidar <theodorstormgrade@gmail.com>
_gui=true
pkgbase=simulationcraft
pkgname=simulationcraft
_pkgname=simc
_simver=620
_simrel=02
pkgver=${_simver}_${_simrel}
pkgrel=2
pkgdesc="A tool to explore combat mechanics in the popular MMO RPG World of Warcraft (tm). Multi-player event-driven simulator written in C++ that models raid damage."
url="http://code.google.com/p/simulationcraft"
arch=('i686' 'x86_64')
license=('GPL3')
replaces=('simcraft' 'simcraft-data' 'simcraft-gui')
conflicts=('simcraft' 'simcraft-data' 'simcraft-gui' 'simulationcraft-git' 'simulationcraft-data-git' 'simulationcraft-gui-git')

install=$pkgname.install
source=("http://downloads.simulationcraft.org/$_pkgname-${_simver}-${_simrel}-source.zip"
        'SimulationCraft.desktop'
)
md5sums=('d1155ac12510ae0344d742ee86d8ba6d'
         '59f2d428f6c7ad8a3eee1ca615a5982a')

prepare()
{
  cd $srcdir/${_pkgname}-${_simver}-${_simrel}-source
  #dos2unix ${_pkgname}-${_simver}-${_simrel}-source/engine/sc_main.cpp
  # we don't want to build engine twice
  if [ $_gui = true ] ; then
    #cd ${_pkgname}-${_simver}-${_simrel}-source
    sed -e 's|SOURCES|OBJECTS|' -e 's|\.cpp|\.o|' -i source_files/QT_engine{,_main}.pri
    qmake  INSTALLPATH=/usr/share/simulationcraft \
      SHAREDIR=/usr/share/simulationcraft \
      PREFIX=/usr \
      CONFIG+='to_install' \
      simcqt.pro -o Makefile
  fi

}

build()
{
  cd $srcdir/${_pkgname}-${_simver}-${_simrel}-source/engine
  make PREFIX=/usr  CFLAGS+="$CFLAGS"  CXXFLAGS+="$CXXFLAGS" LDFLAGS+="$LDFLAGS"
  if [ $_gui = true ] ; then
    cd ..
    make PREFIX=/usr CXXFLAGS+="$CXXFLAGS \$(DEFINES) -fPIC" LDFLAGS+="$LDFLAGS"
  fi
}

package_simulationcraft-data()
{
  pkdesc+="data"
  arch="any"
  cd $srcdir/$_pkgname-${_simver}-${_simrel}-source
  for profile in $( find profiles -type f); do
    install -Dm644 $profile   "$pkgdir/usr/share/simulationcraft/$profile"
  done

  for doc in Welcome.html Welcome.png readme.txt; do
    install -Dm644 $doc $pkgdir/usr/share/doc/simulationcraft/$doc
  done

}

package_simulationcraft()
{
  depends=( 'openssl' "simulationcraft-data=$pkgver" )
  cd $srcdir/$_pkgname-${_simver}-${_simrel}-source
  install -Dm755 engine/simc     "$pkgdir/usr/bin/simc"
}

if [ $_gui = true ] ; then
package_simulationcraft-gui()
{
  pkgdesc+="gui"
  depends=( 'qt5-base' 'qt5-webkit' "simulationcraft=$pkgver")
  cd $srcdir/$_pkgname-${_simver}-${_simrel}-source

    install -Dm644 qt/icon/SimulationCraft.xpm "$pkgdir/usr/share/pixmaps/SimulationCraft.xpm"
    install -Dm644 "$srcdir/SimulationCraft.desktop" "$pkgdir/usr/share/applications/SimulationCraft.desktop"
    for _locale in locale/* ; do
      install -Dm644 $_locale  $pkgdir/usr/share/simulationcraft/$_locale
    done
    install -Dm755 SimulationCraft $pkgdir/usr/bin/simulationcraft
    make install INSTALL_ROOT=$pkgdir
    rm -rf $pkgdir/usr/share/simulationcraft

}
fi

if [ $_gui = true ] ; then
  makedepends+=( 'qt5-base' 'qt5-webkit')
  true && pkgname=( simulationcraft simulationcraft-gui simulationcraft-data )
else
  true && pkgname=( simulationcraft  simulationcraft-data )
fi
