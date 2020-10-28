# Maintainer: Dave Wheeler <dwwheeler at gmail dot com>
# Maintainer: Eric Liu <eric@hnws.me>
# Official repo maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Official repo maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Official repo Contributor: Spider.007 <archlinux AT spider007 DOT net>

pkgname=kibana-xpack
relpkgname=kibana
pkgver=7.9.3
pkgrel=1
pkgdesc='Browser based analytics and search dashboard for Elasticsearch'
url='https://www.elastic.co/products/kibana'
arch=('any')
license=('custom:Elastic')
depends=('nodejs-lts-dubnium')
optdepends=('elasticsearch')
provides=('kibana')
conflicts=('kibana')
backup=('etc/kibana/kibana.yml')
options=('!strip' 'emptydirs')
source=(https://artifacts.elastic.co/downloads/$relpkgname/$relpkgname-${pkgver}-linux-x86_64.tar.gz
        kibana.service
        tmpfile.conf
        user.conf)
sha512sums=('c82b0dc91f2e6e585c6187b357ad8da6078a9b17974f6574628161a54981ea64b2f0b6c2e85bb052d20d5d5f64210fae7fbc3f78d7f30722d6f1e5d095b0a2f7'
            '3216c2864cf184cea0883677a05bf83cf396fda52dbd3d9a187de22f0c45d13db58f8fb4dc926694ba7d7a24000cf6d5f6218805f74fb5d729fc85c643ca8f2f'
            'afed49c164561f3c658a6d2423519adcf4d5293c416cd93fa5c9d12421416c1e9cb4287e832009049cfd014b365dc1cd93d9cf879117c701cce4caad3b772a8e'
            '9085884430c656cc68b855c3d6740e5fd0854a8785930341b29e15e201deacc1870d8223255d9ebe096cb111319bea9bf4faa03d0760d5819976ebf912221c7d')

prepare() {
  cd $relpkgname-${pkgver}-linux-x86_64

  # remove nodejs strict version requirements
  sed "s@^require('./node_version_validator');@// \0@" -i src/setup_node_env/prebuilt_dev_only_entry.js

  # set default quiet mode for systemd, cli option forces specified values
  sed -r 's|#(logging.quiet:) false|\1 true|' -i config/kibana.yml
}

package() {
  cd $relpkgname-${pkgver}-linux-x86_64

  install -dm 755 "${pkgdir}/usr/share/kibana"
  cp -a * "${pkgdir}/usr/share/kibana"
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  install -dm 750 "${pkgdir}/etc/kibana"
  install -Dm 640 config/kibana.yml -t "${pkgdir}/etc/kibana"
  install -Dm 644 "${srcdir}/kibana.service" -t "${pkgdir}/usr/lib/systemd/system"
  install -Dm 644 "${srcdir}/user.conf" "${pkgdir}/usr/lib/sysusers.d/kibana.conf"
  install -Dm 644 "${srcdir}/tmpfile.conf" "${pkgdir}/usr/lib/tmpfiles.d/kibana.conf"

  rm -r "${pkgdir}/usr/share/kibana/node"
  find "${pkgdir}/usr/share/kibana/node_modules" -type d -empty -delete

  if [ -f "${pkgdir}/usr/share/kibana/data/uuid" ];then
    rm -v "${pkgdir}/usr/share/kibana/data/uuid"
  fi
}

# vim: ts=2 sw=2 et:
