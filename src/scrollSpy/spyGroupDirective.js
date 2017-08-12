export default class SpyGroupDirective {
  controller() {
    this.restrict = 'A';
    this.require = '^scrollSpy';
  }

  link(scope, elem, attrs, ctrl) {
    ctrl.setGroup(attrs.id, elem);

    ctrl.refresh();
    ctrl.update();
  }

  static createInstance() {
    SpyGroupDirective.instance = new SpyGroupDirective();
    return SpyGroupDirective.instance;
  }
}

