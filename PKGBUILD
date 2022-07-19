# Maintainer: thorko contact@thorko.de
pkgname=elasticsearch-bin
pkgver=8.3.2
pkgrel=0
pkgdesc="Log analyzer. search, store and analyze logs"
arch=('x86_64')
url='https://elastic.co'
license=('ELv2')
source_x86_64=("https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${pkgver}-linux-x86_64.tar.gz")
sha256sums_x86_64=('98f1b43dafed26e862a436ec57a6c6d88acbec792bea4ba7a6a81dab98051d20')

install=elasticsearch.install

source=(
  "elasticsearch.service"
  "sysctl.conf"
  "users.conf"
)

sha256sums=(
  '9e1f68ff275ef2b5f2b93d2823efc5cc9643da696fcbe09a3ea7520ada35ffba'
  'b3feb1e9c7e7ce6b33cea6c727728ed700332aae942ca475c3bcc1d56b9f113c'
  'fc9683349457f56bcd044cd8e711bc8efd43d32f9547d5b21a66650c6dfbed73'
)

package() {
    mkdir -p "${pkgdir}/opt"
    cp -R "${srcdir}/elasticsearch-${pkgver}" "${pkgdir}/opt/elasticsearch"
    install -Dm0644 "elasticsearch.service" "${pkgdir}/etc/systemd/system/elasticsearch.service"
    install -Dm0644 "sysctl.conf" "${pkgdir}/usr/lib/sysctl.d/elasticsearch.conf"
    install -Dm0644 "users.conf" "${pkgdir}/usr/lib/sysusers.d/elasticsearch.conf"
}
