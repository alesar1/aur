#Maintainer: Dimitris Pappas <mitsakosgr@gmail.com>
pkgname=minizinc-ide
pkgver=2.1.5
pkgrel=1
pkgdesc="Simple IDE for writing and running MiniZinc models"
arch=('i686' 'x86_64')
url="http://www.minizinc.org/ide/"
license=('Mozilla Public License Version 2.0')
provides=('minizinc')
conflicts=('libminizinc')

source=('minizinc-ide.desktop'
        'minizinc.png')

depends=('libpng12'
	 'pcre'
	 'gstreamer'
	 'gst-plugins-base-libs'
	 'double-conversion')

source_x86_64=(https://github.com/MiniZinc/MiniZincIDE/releases/download/"${pkgver}"/MiniZincIDE-"${pkgver}"-bundle-linux-x86_64.tgz)
source_i686=(https://github.com/MiniZinc/MiniZincIDE/releases/download/"${pkgver}"/MiniZincIDE-"${pkgver}"-bundle-linux-x86_32.tgz)

sha256sums=('b86ef15b8ee1014342a2f38358d7f806a58b900bf1150101b535aecddaa122d1'
            '1b9fa21e25c48e1080eaea2348eb98a45242e045b7ba94fe4723a9b01cbcdb2a')
sha256sums_i686=('006e72beefcfe9a291adffc60597f129b88db12c7ab07ebc9126bb9807e05cd2')
sha256sums_x86_64=('e88e3d774d5670275c61d44e6bbaff91288940e92b0475b4c41f0cf685fada8c')


package() {
    if [ "${CARCH}" == "i686" ]; then
        _arch=32;
    else
        _arch=64;
    fi

    mkdir -p "${pkgdir}"/usr/share/applications

    # Move .desktop file to global applications folder
    install "${srcdir}/"minizinc-ide.desktop "${pkgdir}"/usr/share/applications/

    mkdir -p "${pkgdir}"/usr/share/"${pkgname}"
    mkdir -p "${pkgdir}"/usr/lib
    
    # Move png to package
    install "${srcdir}/"minizinc.png "${pkgdir}"/usr/share/"${pkgname}"

    # Move uncompressed files to package
    mv "${srcdir}/"MiniZincIDE-"${pkgver}"-bundle-linux-x86_"${_arch}"/* "${pkgdir}"/usr/share/"${pkgname}"


    # Rewrite MiniZincIDE.sh in order to change locations
    cd "$pkgdir"

    cat <<EOT > usr/share/"${pkgname}"/MiniZincIDE.sh
#!/bin/sh
export LD_LIBRARY_PATH=\$LD_LIBRARY_PATH:/usr/share/$pkgname/lib
export QT_PLUGIN_PATH=/usr/share/$pkgname/plugins
exec /usr/share/$pkgname/MiniZincIDE \$@
EOT

    # Create links for minizinc programs.
    mkdir -p usr/bin
    ln -s /usr/share/${pkgname}/MiniZincIDE.sh usr/bin/minizinc-ide
    ln -s /usr/share/${pkgname}/{flatzinc,fzn-gecode-gist,minizinc,mzn2doc,mzn-g12fd,mzn-g12mip} usr/bin
    ln -s /usr/share/${pkgname}/{solns2dzn,fzn-gecode,mzn2fzn,mzn-g12lazy,mzn-gecode,solns2out} usr/bin/

    # Workaround for dependency resolver
    ln -s /usr/lib/libpcre16.so usr/lib/libpcre16.so.3
}
