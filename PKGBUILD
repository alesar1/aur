# Maintainer: Sauyon Lee <arch@sauyon.com>
# Contributor: Douglas Creager <dcreager@dcreager.net>
pkgname=fdr
pkgver=4.2.3
pkgrel=1
pkgdesc="Refinement checker for CSP"
arch=('x86_64')
url="https://www.cs.ox.ac.uk/projects/fdr/"
license=('custom')
depends=('libtinfo5' 'openssl-1.0' 'gcc-libs' 'qt5-base' 'qt5-3d' 'qt5-x11extras' 'libxcb' 'mesa' 'libffi' 'libgl' 'libdrm')
source=('https://www.cs.ox.ac.uk/projects/fdr/downloads/fdr-3789-linux-x86_64.tar.gz')
sha256sums=('08c5a0a91e049ccab2930515d32df36722a4a03f79cc47b96abd540f59c45e58')

package() {
  install -d "${pkgdir}/opt/fdr"
  cp -r "${srcdir}/fdr/"{bin,lib} "${pkgdir}/opt/fdr"
  for c in libstdc++* libQt5* libxcb* libglapi* libffi* libGL* libdrm*; do
    find "${pkgdir}/opt/fdr/lib/" -name "$c" -delete
  done
  rm -rf "${pkgdir}/opt/fdr/lib/qt_plugins"
  ln -s "../../../usr/lib/qt/plugins" "${pkgdir}/opt/fdr/lib/qt_plugins"
  install -d "${pkgdir}/usr"
  cp -r "${srcdir}/fdr/include" "${pkgdir}/usr"

  install -d "${pkgdir}/usr/bin"
  for c in cspmchecker cspmcheckeri fdr4 refines; do
    ln -s "../../opt/fdr/bin/$c" "${pkgdir}/usr/bin"
  done

  install -d "${pkgdir}/usr/lib"
  # for c in libfdr.so libcspm_process_compiler.so libprocess_compiler.so \
  #                    librefines.so librefines_licensing.so libcsp_operators.so; do
  #   ln -s "../../opt/fdr/lib/$c" "${pkgdir}/usr/lib"
  # done
  find "${pkgdir}/opt/fdr/lib" -mindepth 1 -maxdepth 1 -exec ln -s {} "${pkgdir}/usr/lib" \;

  install -d "${pkgdir}/usr/share/doc/fdr"
  cp -r "${srcdir}/fdr/fdr-examples" "${pkgdir}/usr/share/doc/fdr/examples"
}

# vim:set ts=2 sw=2 et:
