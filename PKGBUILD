# Maintainer: Zhuoyun Wei <wzyboy@wzyboy.org>

pkgname=etcd-bin
_pkgname=etcd
pkgver=3.5.2
pkgrel=1
pkgdesc='A highly-available key value store for shared configuration and service discovery - binary version'
arch=('x86_64')
url='https://github.com/coreos/etcd'
license=('Apache')
provides=('etcd')
conflicts=('etcd' 'etcd-git')
backup=('etc/etcd/etcd.conf.yml')
install="etcd.install"
source=("https://github.com/coreos/${_pkgname}/releases/download/v${pkgver}/${_pkgname}-v${pkgver}-linux-amd64.tar.gz"
        "https://github.com/coreos/${_pkgname}/raw/v${pkgver}/contrib/systemd/${_pkgname}.service"
        "https://github.com/coreos/${_pkgname}/raw/v${pkgver}/${_pkgname}.conf.yml.sample")
sha256sums=('256cad725542d6fd463e81b8a19b86ead4cdfe113f7fb8a1eabc6c32c25d068b'
            '6b2921568bd96f5bb48ba61d2b9673f42e49eb90fda35a7003fbac469a226a13'
            '1a532bf85dbb94fb370e1b69e4384e8bf5cd93b3cea778e9f9fc9dfe15009328')

package() {
  cd ${srcdir}
  install -Dm644 etcd.conf.yml.sample ${pkgdir}/etc/etcd/etcd.conf.yml
  install -Dm644 etcd.service ${pkgdir}/usr/lib/systemd/system/etcd.service
  cd "${_pkgname}-v${pkgver}-linux-amd64"
  install -Dm755 etcd ${pkgdir}/usr/bin/etcd
  install -Dm755 etcdctl ${pkgdir}/usr/bin/etcdctl
}

# vim:set ts=2 sw=2 et:
