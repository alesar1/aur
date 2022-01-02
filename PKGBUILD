# Maintainer: HLFH <gaspard@dhautefeuille.eu>

pkgbase=uwsgi-ng
_pkgbase=uwsgi
pkgname=(
  uwsgi-ng
  uwsgi-ng-plugin-rack
  uwsgi-ng-plugin-psgi
  uwsgi-ng-plugin-cgi
  uwsgi-ng-plugin-python
  uwsgi-ng-plugin-pypy
  uwsgi-ng-plugin-php
  uwsgi-ng-plugin-php7
  uwsgi-ng-plugin-lua51
  uwsgi-ng-plugin-mono
  uwsgi-ng-plugin-webdav
  uwsgi-ng-plugin-zabbix
  uwsgi-ng-plugin-notfound
)
pkgver=2.0.20
pkgrel=1
pkgdesc="Fork of uWSGI fast-tracking the latest patches (including Python 3.10 patch)"
arch=(x86_64)
url="https://uwsgi-docs.readthedocs.io/en/latest/"
license=(GPL2)
makedepends=(
  jansson
  libxcrypt
  libxml2
  lua51
  mono
  openssl
  pam
  pcre
  perl
  php-embed
  php7-embed
  pypy
  python
  python-gevent
  python-greenlet
  ruby
  systemd
  util-linux
  zlib
)
source=(
  "https://projects.unbit.it/downloads/$_pkgbase-$pkgver.tar.gz"
  archlinux.ini
  emperor.ini
  emperor.uwsgi.service
  emperor.uwsgi.socket
  uwsgi_at.service
  uwsgi_at.socket
  uwsgi.logrotate
  uwsgi.sysusers
  uwsgi.tmpfiles
  "${_pkgbase}-1.9.13-ruby2.0.patch"
  "${_pkgbase}-2.0.20-python3.10.patch"
)
sha512sums=('22677a8ad1ea886e1a3a153f486474ce064a55e5b12515322345116980f699f4e2e73267f991c300d904284e06f265ea821e71ba3c97832b6f25705475b498ff'
            '51c474a5ae025c0fae17dec309bea29550a8ca39815b7495189394ae5ce30eb264f77a45f48f9f7529c59d907baf139cdf7c488d1b13fcb862cc7b9bdc268804'
            'd54c84838ddb2f389e115ebb81aa2583705c9e330f020e6583b496f9c271ed236b6820c2a065f2b55a79adbf13e262b9ff2428124a8044b8fa20ca29ca4930ac'
            '068ada6281fdeb504fed7e47dae2729d047ed810bb596e5268c1821ad275cd32110e801e93e7ba0ee2d92dbc39e1954180cf43d88d2990d42b802ceb54b50a9e'
            '592c85270f43b37e9c51aae126533830515b96fff9fcae969ee865fe173bd0550c7729530d5ff1e44ffee43cd5c78c96688ce091c677a4196379e24983c0180e'
            '29e51d3f441bd8af23c9378bca6cb38376bbbf31bb3b07f318a04ea5620cf25d35d7799ba4a8ecff12634dccd903eef27a6957b932370706e35549f8fbcd2455'
            'fb51a4d102a1bc7d9f7d4c4f310ee65076bcfbc94b47e2dafdf9b20e99a661c5f938185dcf698437d81409376f0276b966f09b13c8a29462c48612df43c3f3ef'
            '937878372aa1556f6ba62ad7148d1681288c94d6cff609368a9e861dd4d4524330006a08ae5993441f7d3101170e3a0a681a4c8b3c2c13b364b8b1f81cf25117'
            '9e9eab08199cf08810ec95b0697cd8817226986d1e3aeb54845c0140ea5887360580348f295060c0558fb2d6aaed26fec929ea36b28cfeaf2b3588ce40fec3df'
            '4def9dcd06cfc2c6ce554add9d9545a01f3bb2681f0a2a6fc4ba68f91011111803a955cc41b5e70832ca448b196109368fdf874e81b7ec0edee4b51f864e16f7'
            '162ca1be96282b32e8e6be919b6315bfd08954c491056958985bf99e7f5bdad3511665f059329d6cb6ef5d222f9aa11d4dc43c72e6a963ab941ada959fe8d964'
            'c6c8d64074a011c7abaccdc21bd119b5257b1ea57d3a15f77c96d5e8c3c9e2aaf912da22d124a6ec8fbb25a354096ff9fc771e6727235e3c5476d80bd8e29b2b')
b2sums=('b3bff3564206119dc25bd42f399ced724354452af3414bd8b1e1876c4915e8e4f651843c2fca3795ae195bd8f608013e0c8b41e0535e76e894a3fee9410a6c3b'
        '46f833e5d179d950bcbab51b539e6431959c9e3618c0d66b791a4b4d866b6195707704b394224b4fea97e1f65188b8b474499d70e5c2bb44da32c60447b80806'
        '835a1036422e9821cd52ffdf5a6053bdd59fc700d473600bda60b6730746f6c0750c30c85f4139d3ea81c6b6dd10d6849f9406decee3179861c51aca90da6161'
        '80aa3c4d3f0310f5029ac01690d2ba718d8c86fa49cd1b4f3fc1bd5ae9eadaed6562bf0a48a0fd611e92f100a8594e08fb4bae58e25765fc2eb648cdf1c60b35'
        'b6838c0c91811d4b677bf0f558134c69015708c308ef7080df328f12b0b0d58ae6cdebe277c29b6d11c20cfeb0847a4934e3a8924323e57ed661d6e9f6656a34'
        '6587282d48c53cff862951503c560fd3bfe2fbfe18d56af7b5fbf8299b2b99125101a866005ef1fbabe6af9640c200c5121949b3723865d8597a948ed3d650e8'
        '24c61581bb922f8065a6ea73164ca5d0b6c63ab4ca7c265660b2ec257b69ff9dd4b0349572ff20f54950961b4286c77da36c1d2778698c80943cfd6ed6531b10'
        'a8b7d003f66ed5c5b1b60d57c05339af3dcdcf346eab52760810086e17f6936dd29ed7fd26281657bc86ac6721c989cbfbaa8e81f97111c807bcd06baece3bf2'
        '82e03ea95995cfa78abc4d930bd0c250f22788d9ca4dc0921cfbb44a965c0f851cbcc7a855e36ec6e6aa5bf33fbd313b4fe68a2f1c4b7935c2b297be25895324'
        '9759827f7619358383bf0e68c955522c0054620f742f5122a59888fadfc0bc20bd587eab7a77bc73e8ee4d20cf8f02625c07f241462e8ab9c08f5af509daaef3'
        '0068763ca5a2f1b60782f53070cbff8cf930e1463d9199b156b02413026bcdb3d923bffcbba063a26d620b8e734bdbd26a4c22776532546ad8c8e5c0c73bd7d6'
        '7ac0b4dd838a072349269c529de7cb6c347957652d65f7213b8f9d7a310644b287af5ed62fd7920cf18b4b7572c363fa1cccfa4eb62ed15df5dcd38495e53adc')

prepare() {
  local _patch

  cd "$_pkgbase-$pkgver"

  patch -Np1 -i "$srcdir"/uwsgi-1.9.13-ruby2.0.patch
  patch -Np1 -i "$srcdir"/uwsgi-2.0.20-python3.10.patch

  # fix default lua pkgconfig name
  sed -e 's/lua5.1/lua51/' -i plugins/lua/uwsgiplugin.py
  # move ruby plugin to new location and fix its name
  mv plugins/ruby{19,}
  sed -e 's/ruby19/ruby/' -i plugins/ruby/uwsgiplugin.py
  # duplicate the php plugin, so that we can modify it (and leave the php7
  # version unmodified)
  cp -av plugins/php{,7}
  # remove the explicit lib version from the linking stage of the PHP plugin as
  # we do not provide /usr/lib/libphp8.so
  sed -e "s/ + php_version//" -i plugins/php/uwsgiplugin.py
  # copy our custom build profile into place
  cp -v ../archlinux.ini buildconf/
}

build() {
  cd "$_pkgbase-$pkgver"
  python uwsgiconfig.py --verbose --build archlinux
  # build php7 plugin separately and override php-config in use
  UWSGICONFIG_PHPPATH='php-config7' \
  python uwsgiconfig.py --verbose --plugin plugins/php7 archlinux php7
}

package_uwsgi-ng() {
  depends=('glibc' 'jansson' 'libcap.so' 'libcrypt.so' 'libpam.so' 'libxml2'
  'libsystemd.so' 'libuuid.so' 'openssl' 'pcre' 'zlib')
  conflicts=('uwsgi')
  backup=('etc/uwsgi/emperor.ini')
  install=uwsgi.install

  mkdir -p /etc/uwsgi/vassals

  cd "$_pkgbase-$pkgver"
  install -vDm 755 "${_pkgbase}" -t "$pkgdir/usr/bin/"
  install -vDm 644 ../uwsgi_at.service "$pkgdir"/usr/lib/systemd/system/uwsgi@.service
  install -vDm 644 ../uwsgi_at.socket "$pkgdir"/usr/lib/systemd/system/uwsgi@.socket
  install -vDm 644 ../emperor.uwsgi.service "$pkgdir"/usr/lib/systemd/system/emperor.uwsgi.service
  install -vDm 644 ../emperor.uwsgi.socket "$pkgdir"/usr/lib/systemd/system/emperor.uwsgi.socket
  install -vDm 644 ../emperor.ini -t "$pkgdir"/etc/uwsgi/
  install -vDm 644 ../uwsgi.tmpfiles "$pkgdir"/usr/lib/tmpfiles.d/uwsgi.conf
  install -vDm 644 ../uwsgi.logrotate "$pkgdir"/etc/logrotate.d/uwsgi
  install -vDm 644 ../uwsgi.sysusers "$pkgdir"/usr/lib/sysusers.d/uwsgi.conf
}

package_uwsgi-ng-plugin-cgi() {
  pkgdesc+=" (CGI plugin)"
  depends=('glibc' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-cgi')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 cgi_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-rack() {
  depends=('glibc' 'ruby' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-rack')
  pkgdesc="Ruby rack plugin"

  cd "$_pkgbase-$pkgver"
  install -vDm 755 {rack,fiber,rbthreads}_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-psgi() {
  pkgdesc+=" (Perl psgi plugin)"
  depends=('glibc' 'perl' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-psgi')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 psgi_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-python() {
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")

  pkgdesc+=" (Python plugin)"
  depends=('glibc' 'python' 'python-gevent' 'python-greenlet' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-python')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 {asyncio,gevent,greenlet,python}_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
  install -vDm 644 uwsgidecorators.py -t "${pkgdir}${site_packages}"
  python -m compileall "${pkgdir}${site_packages}"
  python -O -m compileall "${pkgdir}${site_packages}"
}

package_uwsgi-ng-plugin-pypy() {
  pkgdesc+=" (PyPy plugin)"
  depends=('glibc' 'pypy' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-pypy')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 pypy_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
  install -vDm 644 uwsgidecorators.py -t "$pkgdir"/opt/pypy/site-packages/
  pypy -m compileall "$pkgdir"/opt/pypy/site-packages/
  pypy -O -m compileall "$pkgdir"/opt/pypy/site-packages/
}

package_uwsgi-ng-plugin-lua51() {
  pkgdesc+=" (LUA plugin)"
  depends=('glibc' 'lua51' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-lua51')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 lua_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-php() {
  pkgdesc+=" (PHP plugin)"
  depends=('glibc' 'php-embed' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-php')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 php_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-php7() {
  pkgdesc+=" (PHP7 plugin)"
  depends=('glibc' 'php7-embed' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-php7')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 php7_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-mono() {
  pkgdesc+=" (mono plugin)"
  depends=('glibc' 'mono' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-mono')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 plugins/mono/uwsgi.dll -t "$pkgdir"/usr/lib/mono/2.0/
  install -vDm 755 mono_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-webdav() {
  pkgdesc+=" (WebDav plugin)"
  depends=('glibc' 'libxml2' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-webdav')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 webdav_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-zabbix() {
  pkgdesc+=" (zabbix plugin)"
  depends=('glibc' 'uwsgi-ng')
  conflicts=('uwsgi-plugin-zabbix')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 zabbix_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}

package_uwsgi-ng-plugin-notfound() {
  pkgdesc+=" (notfound plugin)"
  depends=('uwsgi-ng')
  conflicts=('uwsgi-plugin-notfound')

  cd "$_pkgbase-$pkgver"
  install -vDm 755 notfound_plugin.so -t "$pkgdir"/usr/lib/uwsgi/
}
