# Maintainer: Sergi Jimenez <sjr@redhat.com>
pkgname=kcli
pkgver=11.1
pkgrel=1
pkgdesc="kcli is a CLI wrapper around libvirt"
arch=('any')
url="https://github.com/karmab/kcli"
license=('Apache')
depends=('cdrtools'
         'nmap'
         'python2'
         'libvirt-python2>=2.0.0'
         'python2-docker>=2.0.0'
         'python2-flask'
         'python2-iptools'
         'python2-kubernetes'
         'python2-netaddr'
         'python2-pyaml'
         'python2-prettytable')
makedepends=('python2-setuptools'
             'ruby-ronn')
optdepends=('libvirt: locally managed VMs'
            'qemu: libvirt KVM driver'
            'docker: interaction with local docker daemon')
provides=("kcli=${pkgver}")
source=($pkgname-$pkgver.tar.gz::"https://github.com/karmab/kcli/archive/v${pkgver}.tar.gz")
md5sums=('a2e9fbab8c2068619fcb082c7d598702')

package() {
  cd "$pkgname-$pkgver"

  python2 setup.py install --root="$pkgdir/"
  mkdir -p "${pkgdir}/usr/share/kcli"
  mkdir -p "${pkgdir}/usr/share/man1"
  cp -r extras "${pkgdir}/usr/share/kcli/"
  cp -r plans "${pkgdir}/usr/share/kcli/"
  cp -r samples "${pkgdir}/usr/share/kcli/"
  LANG=en_US.UTF-8 ronn -r README.md
  mv README kcli.1
  gzip kcli.1
  cp kcli.1.gz "${pkgdir}/usr/share/man1/"
}
