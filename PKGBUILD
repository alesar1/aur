# Maintainer: Alexis Polti <ArchSegger at gmail dot com>
# Maintainer: pzl <alsoelp at gmail dot com>

pkgname=jlink-debugger
pkgver=2.14a
pkgrel=4
epoch=1
pkgdesc="Segger JLink debugger for Linux"
arch=('i686' 'x86_64')
license=('custom')
groups=('jlink')
depends=('qt4' 'jlink-software-and-documentation>=5.10n')
source_x86_64=("JLinkDebugger_Linux_V${pkgver/./}_x86_64.tgz::https://download.segger.com/J-Link/J-LinkDebugger/JLinkDebugger_Linux_V${pkgver/./}_x86_64.tgz")
source_i686=("JLinkDebugger_Linux_V${pkgver/./}_i686.tgz::https://download.segger.com/J-Link/J-LinkDebugger/JLinkDebugger_Linux_V${pkgver/./}_i386.tgz")
md5sums_i686=('be10c6483353934ab3cdbdd795fad1e6')
md5sums_x86_64=('b325cf660a632dc6eed1cb607741efa9')
url="https://www.segger.com/jlink-software.html"


package(){
    if [ ${CARCH} = "i686" ]; then
        mv JLinkDebugger_Linux_V${pkgver/./}_i386 JLinkDebugger
    else
        mv JLinkDebugger_Linux_V${pkgver/./}_x86_64 JLinkDebugger
    fi

    # Match package placement from their .deb, in /opt
    install -dm755 "${pkgdir}/opt/SEGGER/JLinkDebugger" \
            "${pkgdir}/usr/share/licenses/${pkgname}" \
            "${pkgdir}/usr/lib/" \
            "${pkgdir}/usr/bin/" \
            "${pkgdir}/usr/share/doc/${pkgname}/"

    cd ${srcdir}/JLinkDebugger*

    # Remove un-needed files
    find . -name ".svn" | xargs rm -rf

    # Bulk copy everything except libs
    cp --preserve=mode -r JLinkDebugger Plugins Doc Config "${pkgdir}/opt/SEGGER/JLinkDebugger"

    # Create links where needed
    ln -s /opt/SEGGER/JLinkDebugger/Doc/License.txt "${pkgdir}/usr/share/licenses/${pkgname}/"
    ln -s /opt/SEGGER/JLinkDebugger/JLinkDebugger "${pkgdir}/usr/bin"

    for f in Doc/*; do
        ln -s /opt/SEGGER/JLinkDebugger/"$f" "${pkgdir}/usr/share/doc/${pkgname}"
    done
}
