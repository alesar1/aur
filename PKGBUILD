# Maintainer: Martoko <mbastholm at gmail dot com>

pkgname=infer-bin
pkgver=1.1.0
pkgrel=1
pkgdesc="Infer is a static analysis tool for Java, C++, Objective-C, and C. Infer is written in OCaml."
arch=('x86_64')
url="https://github.com/facebook/infer"
options=("!strip")
license=('MIT')
depends=('libc++abi'
         'java-environment'
         'ncurses5-compat-libs')
source=("https://github.com/facebook/infer/releases/download/v${pkgver}/infer-linux64-v${pkgver}.tar.xz"
        'FailingTest.c'
        'PassingTest.c'
        'FailingTest.java'
        'PassingTest.java'
        'LICENSE')
sha512sums=('b657b5e7efe86b74391f1592d29ef3b9d3e8604851e9ac1dc43003541a02c21877a51cf78df28bf6d6872646340305271f4a919ce7f86c9d967724389ad39477'
            'e72e043048624ef958dcb03c73b042d17ee162d80f5f9798dd89b25b9ceca6e4852fc4627ac7c1d5162c73834431f61f52d3b37a4f990d1a19dc927665adbb04'
            'd5333a55e34e92225dd2018a1b016c0ffe537773ea8d708cd74e2ae8c6e556cec8998028238fb993a000ef0841a6a21f7585893a58fb6c2208122951b717dd78'
            '716d142870b12af04a19d81197b96f91af1544d1d8f2a4d09248d161cb4995ef3ff4611f8bd175a0553f0911cf24efa79ef97e36a14667f5b2027e053576d880'
            '24ec322cbf4ebc6a5cb41269b1c6ebf09226cf3d0e4201781bd805bb63ffa499090d74542c8fcbdcd63924b8acfb7443acc1732441a2e3bb4c54a0cbf1aec680'
            '400e5fff25247fb0fa8c0125073658c8f429c39fc20efefe9a8a69b5c5f925a9df1818b324e6691884ba108463908b75758f07b4796bf9fb972401696d3371f4')

check() {
  ${srcdir}/infer-linux64-v${pkgver}/bin/infer --fail-on-issue -- clang -c FailingTest.c && return 1
  ${srcdir}/infer-linux64-v${pkgver}/bin/infer --fail-on-issue -- clang -c PassingTest.c || return 1

  ${srcdir}/infer-linux64-v${pkgver}/bin/infer --fail-on-issue -- javac FailingTest.java && return 1
  ${srcdir}/infer-linux64-v${pkgver}/bin/infer --fail-on-issue -- javac PassingTest.java || return 1
}

package() {
  mkdir ${pkgdir}/usr
  cp -r ${srcdir}/infer-linux64-v${pkgver}/bin ${pkgdir}/usr/bin
  cp -r ${srcdir}/infer-linux64-v${pkgver}/lib ${pkgdir}/usr/lib
  cp -r ${srcdir}/infer-linux64-v${pkgver}/share ${pkgdir}/usr/share

  install -D -m 644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE 
}
