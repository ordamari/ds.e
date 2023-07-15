import FontSize from '../FontSize';
test('snapshot of fontSizes', () => {
    expect(FontSize).toMatchSnapshot();
});
