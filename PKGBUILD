# Maintainer:  Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Contributor: Martin Weinelt <mweinelt@gmail.com>
# Contributor: Samuel Kogler <firstname.lastname at gmail.com>
# Contributor: Bjoern Bidar <theodorstormgrade@gmail.com>

_gui=true
pkgbase=simulationcraft
pkgname=simulationcraft
_pkgname=simc
_simver=715
_simrel=01
pkgver=${_simver}_${_simrel}
pkgrel=1
pkgdesc="A tool to explore combat mechanics in the popular MMO RPG World of Warcraft (tm). Multi-player event-driven simulator written in C++ that models raid damage."
url="https://github.com/simulationcraft/simc"
arch=('i686' 'x86_64')
license=('GPL3')
source=("https://github.com/simulationcraft/simc/archive/release-${_simver}-${_simrel}.tar.gz"
        'SimulationCraft.desktop')

md5sums=('99b874978d62b019e10316c556e80ea0'
         '9e52edb48f39888bc13a0b9bd5f8d758')

prepare() {
    cd "${srcdir}/${_pkgname}-release-${_simver}-${_simrel}"
    #dos2unix ${_pkgname}-${_simver}-${_simrel}-source/engine/sc_main.cpp
    # we don't want to build engine twice

    if [ ${_gui} = true ] ; then
        #cd ${_pkgname}-${_simver}-${_simrel}-source
        sed -e 's|SOURCES|OBJECTS|' -e 's|\.cpp|\.o|' -i source_files/QT_engine{,_main}.pri
        qmake  INSTALLPATH=/usr/share/simulationcraft \
          SHAREDIR=/usr/share/simulationcraft \
          PREFIX=/usr \
          CONFIG+='to_install' \
          simcqt.pro -o Makefile
    fi
}

build() {
    cd "${srcdir}/${_pkgname}-release-${_simver}-${_simrel}/engine"
    make PREFIX=/usr  CFLAGS+="${CFLAGS}"  CXXFLAGS+="${CXXFLAGS}" LDFLAGS+="${LDFLAGS}"

    if [ ${_gui} = true ] ; then
        cd ..
        make PREFIX=/usr CXXFLAGS+="${CXXFLAGS} \$(DEFINES) -fPIC" LDFLAGS+="${LDFLAGS}"
    fi
}

package_simulationcraft-data() {
    pkgdesc+=" Data"
    arch=("any")

    cd "${srcdir}/${_pkgname}-release-${_simver}-${_simrel}"

    for profile in $( find profiles -type f); do
        install -Dm644 "${profile}" "${pkgdir}/usr/share/simulationcraft/${profile}"
    done

    install -Dm644 "Welcome.html" "${pkgdir}/usr/share/doc/simulationcraft/Welcome.html"
    install -Dm644 "Welcome.png" "${pkgdir}/usr/share/doc/simulationcraft/Welcome.png"
}

package_simulationcraft() {
    depends=('openssl' "simulationcraft-data=${pkgver}")

    cd "${srcdir}/${_pkgname}-release-${_simver}-${_simrel}"

    install -Dm755 engine/simc "${pkgdir}/usr/bin/simc"
}

if [ ${_gui} = true ] ; then
    package_simulationcraft-gui() {
        pkgdesc+=" GUI"
        depends=('qt5-webkit' "simulationcraft=${pkgver}")

        cd "${srcdir}/${_pkgname}-release-${_simver}-${_simrel}"

        install -Dm644 qt/icon/SimulationCraft.xpm "${pkgdir}/usr/share/pixmaps/SimulationCraft.xpm"
        install -Dm644 "${srcdir}/SimulationCraft.desktop" "${pkgdir}/usr/share/applications/SimulationCraft.desktop"
        for _locale in locale/* ; do
            install -Dm644 "${_locale}" "${pkgdir}/usr/share/simulationcraft/${_locale}"
        done
        install -Dm755 SimulationCraft "${pkgdir}/usr/bin/simulationcraft"
        make install INSTALL_ROOT="${pkgdir}"
        rm -rf "${pkgdir}/usr/share/simulationcraft"
    }

    makedepends+=('qt5-webkit')
    true && pkgname=( simulationcraft simulationcraft-gui simulationcraft-data )
else
    true && pkgname=( simulationcraft  simulationcraft-data )
fi
